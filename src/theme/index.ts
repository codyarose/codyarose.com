import { breakpoints } from './breakpoints'
import { spacing } from './spacing'
import { fontFamily } from './fontFamily'

const theme = {
	colors: {
		black: '#000',
		white: '#fff',
	},
	breakpoints,
	spacing,
	fontFamily,
} as const

export default theme
