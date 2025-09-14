// This file defines the color palette and fonts for the entire application.
// By centralizing it here, we ensure a consistent look and feel and make it easy to update.

export const theme = {
  colors: {
    primary: "#F39C12",    // vibrant orange (buttons, highlights)
    secondary: "#3498DB",  // cool blue (tabs, labels)
    success: "#2ECC71",    // green (correct, progress)
    danger: "#E74C3C",     // red (wrong answers)
    background: "#1F2937",  // dark slate (app background)
    light: "#EAEAEA",      // light text
    dark: "#111827"        // pure dark
  },
  fontFamily: {
    // NOTE: In React Native, custom fonts must be loaded first.
    // We are defining these here but will use system defaults for now.
    // We will implement custom font loading in a later step.
    sans: "System",
    heading: "System",
  },
  borderRadius: {
    // React Native uses numbers for border radius, not strings like '1.25rem'.
    xl: 16,
    '2xl': 24,
  },
};