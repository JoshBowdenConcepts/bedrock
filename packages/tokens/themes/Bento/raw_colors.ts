import { LevelColorByMode } from '../../ThemeType';

export type BaseColors = {
	blue: LevelColorByMode
	gray: LevelColorByMode
};

export const raw: BaseColors = {
  blue: {
	100: {
		light: '#EFF6FF',
		dark: '#182E6E',
	},
	200: {
		light: '#93C5FD',
		dark: '#1E41AB',
	},
	300: {
		light: '#2565E5',
		dark: '#3B83F1',
	},
	400: {
		light: '#1E41AB',
		dark: '#93C6FA',
	},
	500: {
		light: '#182E6E',
		dark: '#DBEAFD',
	}
  },
  gray: {
	100: {
		light: '#F8F8F8',
		dark: '#222222',
	  },
	200: {
		light: '#DFDFDF',
		dark: '#343434',
	  },
	300: {
		light: '#A3A3A3',
		dark: '#5A5A5A',
	  },
	400: {
		light: '#646464',
		dark: '#8F8F8F',
	  },
	500: {
		light: '#333333',
		dark: '#D2D2D2',
	  },
	600: {
		light: '#0E0E0E',
		dark: '#FFFFFF',
	  },
  },

};
