import fs from 'fs';

// TypeScript object representing CSS tokens for light and dark modes
const cssTokens = {
  color: {
    primary: {
      light: '#FF0000',
      dark: '#FFFFFF',
    },
    secondary: {
      light: '#00FF00',
      dark: '#CCCCCC',
    },
    // Add more color tokens as needed
  },
  fontSize: {
    light: '16px',
    dark: '18px',
  },
  // Key-value pairs not following light and dark mode structure
  fontFamily: 'Arial, sans-serif',
  // Add more key-value pairs as needed
};

// Function to convert object to CSS tokens
function objectToCss(object: Record<string, any>, mode: string, prefix = '') {
  return Object.entries(object)
    .map(([key, value]) => {
      if (typeof value === 'object') {
        // Recursively handle nested objects
        return objectToCss(value, mode, `${prefix}${key}-`);
      } else if (typeof value === 'string') {
        // Append key name, prefix, and mode to CSS property
        return `--${prefix}${key}-${mode}: ${value};`;
      } else {
        // Handle key-value pairs not following light and dark mode structure
        return `--${key}: ${value};`;
      }
    })
    .join('\n');
}

// Generate CSS for light and dark modes
const lightModeCss = `
/* Light mode */
[data-colormode="light"] {
${objectToCss(cssTokens, 'light')}
}
`;

const darkModeCss = `
/* Dark mode */
[data-colormode="dark"] {
${objectToCss(cssTokens, 'dark')}
}
`;

// CSS content for both light and dark modes
const cssContent = lightModeCss + darkModeCss;

// File path where you want to save the CSS token file
const filePath = 'tokens.css';

// Write the CSS content into a file using fs
fs.writeFile(filePath, cssContent, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log(`CSS tokens saved to ${filePath}`);
});
