// HELPER TYPES
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

type EnumKeys<T extends Record<string, any>> = {
  [K in keyof T]: Color;
};

/*
!!IMPORTANT!! - READ BELOW BEFORE EDITING
This is the general type for Tock's themes.
All properties are required here by design.
If you want to add a property here please work with the design-systems team as it will affect all theme objects.
*/
type ThemeObject = {
  color: Required<BaseColors>;
  system: {
    color: Required<SystemColors>;
  };
};

// This is a overkill step to ensure that users don't make any optional props in our theme object.
export type Theme = Required<ThemeObject>;

/*
COLORS - Section One
*/

// This could include something like "contrast" in the future
enum ColorModes {
  light = 'LIGHT',
  dark = 'DARK',
}

type ColorByMode = EnumKeys<typeof ColorModes>;

export type BaseColors = {
  red: ColorByMode;
  orange: ColorByMode;
  yellow: ColorByMode;
  green: ColorByMode;
  blue: ColorByMode;
  purple: ColorByMode;
  black: ColorByMode;
  white: ColorByMode;
  gray: ColorByMode;
  gray2: ColorByMode;
};

export type SystemColors = {
  primary: ColorByMode;
  secondary: ColorByMode;
  tertiary: ColorByMode;
};
