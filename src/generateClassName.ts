let ruleCounter = 0;

// Adds a prefix to all generated class names, to avoid conflict with other Material UI instances.
const prefix = "materialui-daterange-picker";

export default function generateClassName(rule: any, sheet: any) {
  ruleCounter += 1;

  if (ruleCounter > 1e10) {
    console.warn(
      ["Material-UI: you might have a memory leak.", "The ruleCounter is not supposed to grow that much."].join(""),
    );
  }

  if (sheet && sheet.options.meta) {
    return `${prefix}-${sheet.options.meta}-${rule.key}-${ruleCounter}`;
  }

  return `${prefix}-${rule.key}-${ruleCounter}`;
}
