import { breakpoints } from './breakpoints'
import { spacing } from './spacing'
import { fontFamily } from './fontFamily'

const theme = {
	colors: {
		dark: {
			bg: 'hsl(0, 0%, 7%)',
			fg: 'hsl(0,0%,93%)',
			accent: '#f694c1',
			cardBg: 'hsl(0, 0%, 9%)',
		},
		light: {
			bg: 'hsl(0,0%,93%)',
			fg: 'hsl(0, 0%, 7%)',
			accent: '#bd3f79',
			cardBg: 'hsl(0, 0%, 91%)',
		},
	},
	breakpoints,
	spacing,
	fontFamily,
} as const

export default theme
