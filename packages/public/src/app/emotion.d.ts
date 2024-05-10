import '@emotion/react'
import { CSSObject } from '@emotion/react'
import { ThemeObject } from 'tokens'

declare module '@emotion/react' {
	export interface Theme extends ThemeObject {}
}