import { breakpoints } from './breakpoints'
import { spacing } from './spacing'
import { fontFamily } from './fontFamily'

const theme = {
	colors: {
		black: '#0a0500',
		white: '#fff',
		accent: '#f694c1',
	},
	breakpoints,
	spacing,
	fontFamily,
} as const

export default theme
