import { breakpoints } from './breakpoints'
import { spacing } from './spacing'
import { fontFamily } from './fontFamily'

const theme = {
	colors: {
		dark: {
			bg: '#0a0500',
			fg: '#fff',
			accent: '#f694c1',
		},
		light: {
			bg: '#fff',
			fg: '#0a0500',
			accent: '#bd3f79',
		},
	},
	breakpoints,
	spacing,
	fontFamily,
} as const

export default theme
