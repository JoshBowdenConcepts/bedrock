import { PrimitiveColors, color } from './system/colors';
import { PrimitiveSpacing, spacing } from './system/spacing'

/*
!!IMPORTANT!! - READ BELOW BEFORE EDITING
This is the general type for Tock's themes.
All properties are required here by design.
If you want to add a property here please work with the design-systems team as it will affect all theme objects.
*/
type ThemeObject = {
	// Primitives are not exported because they should be private
	color: Required<PrimitiveColors>;
	spacing: Required<PrimitiveSpacing>;
};
  
// This is a overkill step to ensure that users don't make any optional props in our theme object.
export type Theme = Required<ThemeObject>;

export const bento: Theme = {
	// Color is not exported because it should not be accessed directly
    color,
	spacing
};
