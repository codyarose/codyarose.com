import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../theme'
import GlobalStyles from '../theme/globalStyles'
import Nav from './Nav'
import Footer from './Footer'
import { useLocalStorage } from '../utils/useLocalStorage'

interface Props {
	location: Location
	title: string
}

const Layout: FC<Props> = ({ location, children }) => {
	const [isDarkMode, setDarkMode] = useLocalStorage('darkMode', true)
	const currentTheme = isDarkMode ? 'dark' : 'light'
	const { colors, ...rest } = theme
	const newTheme = {
		colors: {
			bg: colors[currentTheme].bg,
			fg: colors[currentTheme].fg,
			accent: colors[currentTheme].accent,
		},
		...rest,
	}

	return (
		<ThemeProvider theme={newTheme}>
			<GlobalStyles />
			<Wrapper>
				<Nav
					location={location}
					toggleTheme={() => setDarkMode(!isDarkMode)}
				/>
				<main>{children}</main>
				<Footer />
			</Wrapper>
		</ThemeProvider>
	)
}

const Wrapper = styled.div`
	max-width: 60rem;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding: ${({ theme }) => theme.spacing(0, 5)};
	margin: 0 auto;
	${({ theme }) => theme.breakpoints.down('xs')} {
		padding: ${({ theme }) => theme.spacing(0, 2)};
	}
`

export default Layout
