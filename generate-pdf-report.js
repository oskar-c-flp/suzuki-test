#!/usr/bin/env node

/**
 * Generates a PDF summary report from Allure raw result files (*-result.json).
 *
 * Usage:
 *   node generate-pdf-report.js <allure-results-folder> <output.pdf>
 *
 * Example:
 *   node generate-pdf-report.js allure-results allure-report.pdf
 *
 * Optional: pass the attachments folder as a 3rd argument if it differs from
 * the results folder (Allure normally stores attachments alongside results,
 * so this defaults to the same folder).
 */

const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

// DejaVu Sans is bundled so the report renders correctly regardless of what
// fonts are installed on the machine running this script (e.g. CI runners).
const FONT_DIR = path.join(__dirname, 'fonts');
const FONTS = {
  regular: path.join(FONT_DIR, 'DejaVuSans.ttf'),
  bold: path.join(FONT_DIR, 'DejaVuSans-Bold.ttf'),
  italic: path.join(FONT_DIR, 'DejaVuSans-Oblique.ttf'),
};

function registerFonts(doc) {
  for (const [name, file] of Object.entries(FONTS)) {
    if (!fs.existsSync(file)) {
      console.error(`Missing font file: ${file}`);
      console.error('Make sure the "fonts/" folder with DejaVuSans*.ttf sits next to this script.');
      process.exit(1);
    }
    doc.registerFont(name, file);
  }
}

const COLORS = {
  passed: '#1DA53E',
  failed: '#E53935',
  broken: '#FF9800',
  skipped: '#9E9E9E',
  unknown: '#607D8B',
  heading: '#1a1a2e',
  text: '#333333',
  muted: '#777777',
  line: '#dddddd',
};

const IMAGE_TYPES = new Set(['image/png', 'image/jpeg', 'image/jpg', 'image/webp']);

function parseArgs() {
  const [, , resultsDir, outputFile, attachmentsDirArg] = process.argv;
  if (!resultsDir || !outputFile) {
    console.error('Usage: node generate-pdf-report.js <allure-results-folder> <output.pdf> [attachments-folder]');
    process.exit(1);
  }
  return { resultsDir, outputFile, attachmentsDir: attachmentsDirArg || resultsDir };
}

/** Safely reads all *-result.json files from the results folder. */
function loadResults(resultsDir) {
  if (!fs.existsSync(resultsDir)) {
    console.error(`Folder not found: ${resultsDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(resultsDir).filter(f => f.endsWith('-result.json'));

  if (files.length === 0) {
    console.warn(`Warning: no *-result.json files found in ${resultsDir}`);
  }

  const results = [];
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(resultsDir, file), 'utf-8');
      const json = JSON.parse(raw);
      results.push(json);
    } catch (err) {
      console.warn(`Skipped ${file} — parse error: ${err.message}`);
    }
  }
  return results;
}

/** Safely reads a label value (e.g. epic, feature, severity) by name. */
function getLabel(test, name) {
  const labels = Array.isArray(test.labels) ? test.labels : [];
  const found = labels.find(l => l && l.name === name);
  return found ? found.value : null;
}

/**
 * Collects the test's top-level steps (e.g. "Accept cookie banner"), each
 * paired with its technical Playwright call if it has exactly one child
 * step that looks like raw locator/action output (e.g.
 * "Click getByRole('button', ...)"). That technical line is rendered as a
 * plain grey caption under the step, not as its own numbered step.
 *
 * Bare attachment-only entries (video/screenshot steps with no real status)
 * and internal Before/After Hooks / Fixture wrappers are skipped entirely —
 * this is exactly the kind of step allure-docx used to crash on.
 */
const NOISE_STEP_PATTERN = /^(before hooks|after hooks|fixture ".*")$/i;
const TECHNICAL_STEP_PATTERN = /^(click|fill|check|uncheck|select|press|hover|type|expect|navigate to|goto)\b/i;

function isAttachmentOnlyStep(step) {
  return (
    step.status === undefined &&
    Array.isArray(step.attachments) &&
    step.attachments.length > 0 &&
    (!step.steps || step.steps.length === 0)
  );
}

function collectTopLevelSteps(steps, acc = []) {
  if (!Array.isArray(steps)) return acc;

  for (const step of steps) {
    if (!step || typeof step !== 'object') continue;
    if (!step.name) continue;
    if (isAttachmentOnlyStep(step)) continue;
    if (NOISE_STEP_PATTERN.test(step.name.trim())) continue;

    const children = Array.isArray(step.steps)
      ? step.steps.filter(s => s && s.name && !isAttachmentOnlyStep(s))
      : [];

    // If the step has a single child that reads like a raw Playwright call,
    // treat it as a technical detail line rather than its own step.
    let technicalDetail = null;
    let remainingChildren = children;
    if (children.length === 1 && TECHNICAL_STEP_PATTERN.test(children[0].name.trim())) {
      technicalDetail = children[0].name;
      remainingChildren = [];
    }

    acc.push({ name: step.name, status: step.status, technicalDetail });

    if (remainingChildren.length > 0) {
      collectTopLevelSteps(remainingChildren, acc);
    }
  }
  return acc;
}

/** Recursively collects just the names of steps that failed or broke. */
function collectFailedStepNames(steps, acc = []) {
  if (!Array.isArray(steps)) return acc;

  for (const step of steps) {
    if (!step || typeof step !== 'object') continue;

    if (step.status === 'failed' || step.status === 'broken') {
      acc.push(step.name || '(unnamed step)');
    }

    if (Array.isArray(step.steps) && step.steps.length > 0) {
      collectFailedStepNames(step.steps, acc);
    }
  }
  return acc;
}

/** Recursively collects image attachments (screenshots) from the test and its steps. */
function collectScreenshots(test, acc = []) {
  const fromTest = Array.isArray(test.attachments) ? test.attachments : [];
  for (const att of fromTest) {
    if (att && IMAGE_TYPES.has(att.type)) acc.push(att);
  }

  function walk(steps) {
    if (!Array.isArray(steps)) return;
    for (const step of steps) {
      if (!step || typeof step !== 'object') continue;
      const atts = Array.isArray(step.attachments) ? step.attachments : [];
      for (const att of atts) {
        if (att && IMAGE_TYPES.has(att.type)) acc.push(att);
      }
      if (Array.isArray(step.steps)) walk(step.steps);
    }
  }
  walk(test.steps);

  return acc;
}

function formatDuration(test) {
  if (typeof test.start !== 'number' || typeof test.stop !== 'number') return 'n/a';
  const ms = test.stop - test.start;
  if (ms < 1000) return `${ms} ms`;
  return `${(ms / 1000).toFixed(1)} s`;
}

function statusColor(status) {
  return COLORS[status] || COLORS.unknown;
}

function summarize(results) {
  const summary = { passed: 0, failed: 0, broken: 0, skipped: 0, unknown: 0, total: results.length };
  for (const test of results) {
    const status = test.status;
    if (summary[status] !== undefined) {
      summary[status] += 1;
    } else {
      summary.unknown += 1;
    }
  }
  return summary;
}

function contentWidth(doc) {
  return doc.page.width - doc.page.margins.left - doc.page.margins.right;
}

function drawHeader(doc, title) {
  doc
    .fillColor(COLORS.heading)
    .fontSize(22)
    .font('bold')
    .text(title, { align: 'left' });

  doc
    .fillColor(COLORS.muted)
    .fontSize(10)
    .font('regular')
    .text(`Generated: ${new Date().toLocaleString('en-GB')}`);

  doc.moveDown(1);
  drawHorizontalLine(doc);
  doc.moveDown(1);
}

function drawHorizontalLine(doc) {
  const y = doc.y;
  doc
    .strokeColor(COLORS.line)
    .lineWidth(1)
    .moveTo(doc.page.margins.left, y)
    .lineTo(doc.page.width - doc.page.margins.right, y)
    .stroke();
}

function drawSummary(doc, summary) {
  doc
    .fillColor(COLORS.heading)
    .fontSize(14)
    .font('bold')
    .text('Summary');

  doc.moveDown(0.5);

  const rows = [
    ['Total tests', summary.total, COLORS.heading],
    ['Passed', summary.passed, COLORS.passed],
    ['Failed', summary.failed, COLORS.failed],
    ['Broken', summary.broken, COLORS.broken],
    ['Skipped', summary.skipped, COLORS.skipped],
  ];

  const startX = doc.page.margins.left;
  let y = doc.y;
  const rowHeight = 20;

  for (const [label, value, color] of rows) {
    doc
      .fillColor(COLORS.text)
      .font('regular')
      .fontSize(11)
      .text(label, startX, y, { continued: false, width: 220 });

    doc
      .fillColor(color)
      .font('bold')
      .fontSize(11)
      .text(String(value), startX + 230, y);

    y += rowHeight;
  }

  doc.y = y + 10;
  doc.moveDown(0.5);
  drawHorizontalLine(doc);
  doc.moveDown(1);
}

/** Draws a small inline status badge at the given position. Returns its width. */
function drawInlineStatusBadge(doc, status, x, y) {
  const label = (status || 'unknown').toUpperCase();
  const color = statusColor(status);
  const fontSize = 9;
  const paddingX = 8;
  const badgeHeight = 15;
  const badgeWidth = doc.widthOfString(label, { font: 'bold', size: fontSize }) + paddingX * 2;

  doc
    .roundedRect(x, y, badgeWidth, badgeHeight, 3)
    .fill(color);

  doc
    .fillColor('#ffffff')
    .font('bold')
    .fontSize(fontSize)
    .text(label, x, y + 3.5, { width: badgeWidth, align: 'center' });

  return badgeWidth;
}

function drawTest(doc, test, index, attachmentsDir) {
  if (doc.y > doc.page.height - 150) {
    doc.addPage();
  }

  const epic = getLabel(test, 'epic');
  const feature = getLabel(test, 'feature');
  const story = getLabel(test, 'story');
  const severity = getLabel(test, 'severity');
  const suite = getLabel(test, 'suite');

  const startX = doc.page.margins.left;

  // Test title with the status badge inline, right after the text.
  const titlePrefix = `${index + 1}. ${test.name || '(unnamed test)'}`;
  const titleFontSize = 13;
  const badgeLabel = (test.status || 'unknown').toUpperCase();
  const badgeWidthEstimate = doc.widthOfString(badgeLabel, { font: 'bold', size: 9 }) + 16 + 8; // padding + gap

  doc.font('bold').fontSize(titleFontSize);
  const availableTitleWidth = contentWidth(doc) - badgeWidthEstimate;
  const titleHeight = doc.heightOfString(titlePrefix, { width: availableTitleWidth });

  doc
    .fillColor(COLORS.heading)
    .font('bold')
    .fontSize(titleFontSize)
    .text(titlePrefix, startX, doc.y, { width: availableTitleWidth });

  // Vertically center the badge next to the (possibly multi-line) title.
  const badgeY = doc.y - titleHeight + (titleHeight - 15) / 2;
  const badgeX = startX + availableTitleWidth + 8;
  drawInlineStatusBadge(doc, test.status, badgeX, Math.max(doc.y - titleHeight, badgeY));

  doc.moveDown(0.5);

  // Metadata (no "owner")
  const metaParts = [];
  if (suite) metaParts.push(`Suite: ${suite}`);
  if (epic) metaParts.push(`Epic: ${epic}`);
  if (feature) metaParts.push(`Feature: ${feature}`);
  if (story) metaParts.push(`Story: ${story}`);
  if (severity) metaParts.push(`Severity: ${severity}`);
  metaParts.push(`Duration: ${formatDuration(test)}`);

  if (metaParts.length > 0) {
    doc
      .fillColor(COLORS.muted)
      .font('regular')
      .fontSize(9)
      .text(metaParts.join('   |   '), startX, doc.y, { width: contentWidth(doc) });
  }

  // Bigger gap before the description
  doc.moveDown(1.1);

  // Description — bold and larger
  if (test.description) {
    doc
      .fillColor(COLORS.text)
      .font('bold')
      .fontSize(12)
      .text(test.description, startX, doc.y, { width: contentWidth(doc) });
    doc.moveDown(0.5);
  }

  // Steps list — numbered, with the technical Playwright call shown as
  // plain grey text underneath (no number, no bullet).
  const topLevelSteps = collectTopLevelSteps(test.steps);
  if (topLevelSteps.length > 0) {
    doc
      .fillColor(COLORS.heading)
      .font('bold')
      .fontSize(10)
      .text('Steps:', startX, doc.y);
    doc.moveDown(0.2);

    topLevelSteps.forEach((step, stepIndex) => {
      if (doc.y > doc.page.height - 100) doc.addPage();

      const nameColor = step.status === 'failed' || step.status === 'broken'
        ? COLORS.failed
        : COLORS.text;

      doc
        .fillColor(nameColor)
        .font('regular')
        .fontSize(9.5)
        .text(`${stepIndex + 1}. ${step.name}`, startX + 10, doc.y, {
          width: contentWidth(doc) - 10,
        });

      if (step.technicalDetail) {
        doc
          .fillColor(COLORS.muted)
          .font('regular')
          .fontSize(8.5)
          .text(step.technicalDetail, startX + 22, doc.y, {
            width: contentWidth(doc) - 22,
          });
      }
    });
    doc.moveDown(0.4);
  }

  // Failed step names only — no error message / console log text
  if (test.status === 'failed' || test.status === 'broken') {
    const failedStepNames = collectFailedStepNames(test.steps);
    if (failedStepNames.length > 0) {
      doc
        .fillColor(COLORS.failed)
        .font('bold')
        .fontSize(9.5)
        .text('Failed step:', startX, doc.y);

      for (const name of failedStepNames) {
        doc
          .fillColor(COLORS.text)
          .font('regular')
          .fontSize(9.5)
          .text(`• ${name}`, startX + 10, doc.y, {
            width: contentWidth(doc) - 10,
          });
      }
      doc.moveDown(0.3);
    }
  }

  // Screenshots
  const screenshots = collectScreenshots(test);
  if (screenshots.length > 0) {
    doc
      .fillColor(COLORS.heading)
      .font('bold')
      .fontSize(10)
      .text('Screenshot:', startX, doc.y);
    doc.moveDown(0.2);

    for (const shot of screenshots) {
      const imgPath = path.join(attachmentsDir, shot.source);
      if (!fs.existsSync(imgPath)) {
        doc
          .fillColor(COLORS.muted)
          .font('italic')
          .fontSize(8.5)
          .text(`(screenshot file not found: ${shot.source})`, startX, doc.y);
        continue;
      }

      const maxWidth = contentWidth(doc);
      const maxHeight = 260;

      if (doc.y + 40 > doc.page.height - doc.page.margins.bottom) doc.addPage();

      try {
        doc.image(imgPath, startX, doc.y, {
          fit: [maxWidth, maxHeight],
        });

        const dims = sizeOfImageSafely(imgPath);
        let renderedHeight = maxHeight;
        if (dims) {
          const scale = Math.min(maxWidth / dims.width, maxHeight / dims.height);
          renderedHeight = dims.height * scale;
        }
        doc.y = doc.y + renderedHeight + 10;
      } catch (err) {
        doc
          .fillColor(COLORS.muted)
          .font('italic')
          .fontSize(8.5)
          .text(`(could not render screenshot: ${err.message})`, startX, doc.y);
      }
    }
  }

  doc.moveDown(0.4);
  drawHorizontalLine(doc);
  doc.moveDown(0.6);
}

/** Reads PNG/JPEG dimensions without extra dependencies, for image layout math. */
function sizeOfImageSafely(imgPath) {
  try {
    const buffer = fs.readFileSync(imgPath);
    if (buffer[0] === 0x89 && buffer[1] === 0x50) {
      // PNG
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      return { width, height };
    }
    if (buffer[0] === 0xff && buffer[1] === 0xd8) {
      // JPEG — scan markers for SOFx
      let offset = 2;
      while (offset < buffer.length) {
        if (buffer[offset] !== 0xff) break;
        const marker = buffer[offset + 1];
        if (marker >= 0xc0 && marker <= 0xc3) {
          const height = buffer.readUInt16BE(offset + 5);
          const width = buffer.readUInt16BE(offset + 7);
          return { width, height };
        }
        const segmentLength = buffer.readUInt16BE(offset + 2);
        offset += 2 + segmentLength;
      }
    }
  } catch (err) {
    // fall through
  }
  return null;
}

function main() {
  const { resultsDir, outputFile, attachmentsDir } = parseArgs();

  console.log(`Loading results from: ${resultsDir}`);
  const results = loadResults(resultsDir);
  console.log(`Found tests: ${results.length}`);

  const statusOrder = { failed: 0, broken: 1, passed: 2, skipped: 3 };
  results.sort((a, b) => {
    const orderA = statusOrder[a.status] ?? 4;
    const orderB = statusOrder[b.status] ?? 4;
    return orderA - orderB;
  });

  const summary = summarize(results);

  const doc = new PDFDocument({ size: 'A4', margin: 50, bufferPages: true });
  registerFonts(doc);
  const stream = fs.createWriteStream(outputFile);
  doc.pipe(stream);

  drawHeader(doc, 'Test Results Report');
  drawSummary(doc, summary);

  doc
    .fillColor(COLORS.heading)
    .fontSize(14)
    .font('bold')
    .text('Test List');
  doc.moveDown(0.5);

  if (results.length === 0) {
    doc
      .fillColor(COLORS.muted)
      .font('regular')
      .fontSize(11)
      .text('No test data to display.');
  } else {
    results.forEach((test, index) => drawTest(doc, test, index, attachmentsDir));
  }

  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(i);
    doc
      .fillColor(COLORS.muted)
      .fontSize(8)
      .font('regular')
      .text(
        `Page ${i + 1} of ${range.count}`,
        doc.page.margins.left,
        doc.page.height - 30,
        { align: 'center', width: contentWidth(doc) }
      );
  }

  doc.end();

  stream.on('finish', () => {
    console.log(`PDF saved: ${outputFile}`);
  });

  stream.on('error', (err) => {
    console.error('PDF write error:', err);
    process.exit(1);
  });
}

main();
