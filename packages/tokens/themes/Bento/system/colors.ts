import { LevelColorByMode } from '../../../ThemeType';
import { raw } from '../raw_colors';

export type PrimitiveColors = {
	primary: LevelColorByMode;
	gray: LevelColorByMode
};

export const color: PrimitiveColors = {
  primary: {...raw.blue},
  gray: {...raw.gray}
};
