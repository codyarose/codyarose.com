import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: "Butler Bold";
		src: url("/fonts/Butler-Bold.woff2");
	}
	html,
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`

export default GlobalStyles
