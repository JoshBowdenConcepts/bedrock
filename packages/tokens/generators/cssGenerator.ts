import { bento } from '../index'
import fs from 'fs';
import path from 'path'

// Function to convert object to CSS tokens
function objectToCss(object: Record<string, any>, mode?: 'light' | 'dark', prefix = '') {
	return Object.entries(object)
	  .map(([key, value]) => {
		if (typeof value === 'object') {
		  // We are at the light and dark values
		  if(mode && value?.[mode]) {
			return `--${prefix}${key}: ${value?.[mode]};`;
		  } else {
				return objectToCss(value, mode, `${prefix}${key}-`);
		  }
		} else if (typeof value === 'string' && !mode) {
			// This only hits on non light dark modes
		  if (key !== 'light' && key !== 'dark') {
			return `--${prefix}${key}: ${value};`;
		  } else {
			return ''
		  }
		} else {
		  return ''
		}
	  })
	  .filter(Boolean).join('\n  '); // This filters out empty values before joining them with a new line
}

// Generate Normal CSS
const generalCss = `
/* General CSS - Not Color Mode Specific */
:root {
  ${objectToCss(bento)}
}
`
  
// Generate CSS for light and dark modes
const lightModeCss = `
/* Light mode */
[data-colormode="light"] {
  ${objectToCss(bento, 'light')}
}
`;
  
const darkModeCss = `
/* Dark mode */
[data-colormode="dark"] {
  ${objectToCss(bento, 'dark')}
}
`;
  
// CSS content for both light and dark modes
const cssContent = generalCss + lightModeCss + darkModeCss;

fs.mkdir('./css', { recursive: true }, (err) => {
	if (err) throw err;
});
// File path where you want to save the CSS token file
const filePath = './css/tokens.css';
// Write the CSS content into a file using fs
fs.writeFile(filePath, cssContent, (err) => {
	if (err) {
	  console.error('Error writing file:', err);
	  return;
	}
	console.log(`CSS tokens saved to ${filePath}`);
});