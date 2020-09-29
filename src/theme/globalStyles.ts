import { createGlobalStyle } from 'styled-components'

import { codeStyles } from './codeStyles'

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
		background-color: ${({ theme }) => theme.colors.bg};
		color: ${({ theme }) => theme.colors.fg};
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	::selection {
		background: ${({ theme }) => theme.colors.accent};
	}
	${codeStyles}
`

export default GlobalStyles
