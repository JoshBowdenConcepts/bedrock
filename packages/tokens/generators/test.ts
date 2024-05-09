// This was generated code that I can modify to achieve my use case for CSS token development

import fs from 'fs';

// TypeScript object representing CSS tokens for light and dark modes
const cssTokens = {
  light: {
    primaryColor: '#FF0000',
    secondaryColor: '#00FF00',
    fontSize: '16px',
    // Add more tokens for light mode as needed
  },
  dark: {
    primaryColor: '#FFFFFF',
    secondaryColor: '#CCCCCC',
    fontSize: '18px',
    // Add more tokens for dark mode as needed
  },
};

// Function to convert object to CSS tokens
function objectToCss(object: Record<string, any>, mode: string) {
  return Object.entries(object)
    .map(([key, value]) => {
      if (typeof value === 'object') {
        // Recursively handle nested objects
        return objectToCss(value, mode);
      } else {
        // Append key name and mode to CSS property
        return `--${key}-${mode}: ${value};`;
      }
    })
    .join('\n  ');
}

// Generate CSS for light and dark modes
const lightModeCss = objectToCss(cssTokens.light, 'light');
const darkModeCss = objectToCss(cssTokens.dark, 'dark');

// CSS content for both light and dark modes
const cssContent = `/* Light mode */
[data-colormode='light'] {
  ${lightModeCss}
}

/* Dark mode */
[data-colormode='dark'] {
  ${darkModeCss}
}
`;

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
