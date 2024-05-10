/*
COLORS - Section One
*/

// HELPER TYPES
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

type EnumKeys<T extends Record<string, any>> = {
  [K in keyof T]: Color;
};

// This could include something like "contrast" in the future
enum ColorModes {
  light = 'LIGHT',
  dark = 'DARK',
}

export type ColorByMode = EnumKeys<typeof ColorModes>;
export type LevelColorByMode = {[key: number]: ColorByMode}

/*
SPACING - Section Two
*/

type SpacingUnit = '%' | 'px' | 'rem' | 'vh' | 'em';
export type SpacingValue = `${number}${SpacingUnit}`
export type PixelValue = `${number}px`
