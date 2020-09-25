import { css } from 'styled-components'

const StyledLink = css`
	letter-spacing: 4px;
	font-size: 0.75rem;
	text-transform: uppercase;
	opacity: 0.75;
	transition: opacity 0.2s ease-out;
	&:hover {
		opacity: 1;
	}
`

export default StyledLink
