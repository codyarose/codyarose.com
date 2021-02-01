import 'styled-components'
import theme from './src/theme'

type Theme = typeof theme

interface ThemeColors {
	colors: {
		bg: string
		fg: string
		accent: string
		cardBg: string
	}
}

type ThemeUtils = Pick<Theme, 'breakpoints' | 'spacing' | 'fontFamily'>

type NewTheme = ThemeColors & ThemeUtils

declare module 'styled-components' {
	export interface DefaultTheme extends NewTheme {}
}
