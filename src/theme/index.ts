import { breakpoints } from './breakpoints'
import { spacing } from './spacing'

const theme = {
	colors: {
		black: '#000',
		white: '#fff',
	},
	breakpoints,
	spacing,
} as const

export default theme
