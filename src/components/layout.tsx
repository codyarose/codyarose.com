import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../theme'
import GlobalStyles from '../theme/globalStyles'
import Header from './Header'
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
				<StyledContent>
					<Header
						location={location}
						toggleTheme={() => setDarkMode(!isDarkMode)}
					/>
					<main>{children}</main>
				</StyledContent>
				<Footer />
			</Wrapper>
		</ThemeProvider>
	)
}

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const StyledContent = styled.div`
	width: 100%;
	flex: 1 0 auto;
`

export default Layout
