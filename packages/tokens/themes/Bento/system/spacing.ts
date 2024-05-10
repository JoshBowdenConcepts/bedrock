import { PixelValue } from '../../../ThemeType';

/*
✅ Using  numbers rather than t-shirt size so that scale is "scalable"

How to Update:
- Create spacing values divided by two times 100
- If you need something in between this should still work.
*/

export type PrimitiveSpacing = {
	spacing100: PixelValue;
	spacing200: PixelValue;
	spacing400: PixelValue;
	spacing600: PixelValue;
	spacing800: PixelValue;
	spacing1200: PixelValue;
	spacing1600: PixelValue;
	spacing2000: PixelValue;
	spacing2400: PixelValue;
};

export const spacing: PrimitiveSpacing = {
  spacing100: '2px',
  spacing200: '4px',
  spacing400: '8px',
  spacing600: '12px',
  spacing800: '16px',
  spacing1200: '24px',
  spacing1600: '32px',
  spacing2000: '40px',
  spacing2400: '48px',
};
