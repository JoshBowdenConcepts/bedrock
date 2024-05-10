import { ColorByMode } from '../../../ThemeType';
import { raw } from '../raw_colors';

export type PrimitiveColors = {
	primary: ColorByMode;
	secondary: ColorByMode;
	tertiary: ColorByMode;
};

export const color: PrimitiveColors = {
  primary: raw.blue,
  secondary: raw.red,
  tertiary: raw.green,
};
