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
	html {
		scroll-behavior: smooth;
	}
	body {
		background-color: ${({ theme }) => theme.colors.black};
		color: ${({ theme }) => theme.colors.white};
	}
	a {
		color: inherit;
	}
`

export default GlobalStyles
