import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../theme'
import GlobalStyles from '../theme/globalStyles'
import Header from './Header'
import Footer from './Footer'

interface Props {
	location: Location
	title: string
}

const Layout: FC<Props> = ({ location, children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Wrapper>
				<div
					style={{
						marginLeft: `auto`,
						marginRight: `auto`,
					}}
				>
					<Header location={location} />
					<main>{children}</main>
				</div>
				<Footer />
			</Wrapper>
		</ThemeProvider>
	)
}

const Wrapper = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: 1fr auto;
`

export default Layout
