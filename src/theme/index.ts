import { breakpoints } from './breakpoints'
import { spacing } from './spacing'
import { fontFamily } from './fontFamily'

const theme = {
	colors: {
		black: '#0a0500',
		white: '#fff',
	},
	breakpoints,
	spacing,
	fontFamily,
} as const

export default theme
