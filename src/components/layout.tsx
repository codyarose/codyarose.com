import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../theme'
import GlobalStyles from '../theme/globalStyles'
import Header from './Header'

interface Props {
	location: Location
	title: string
}

const Layout: FC<Props> = ({ location, title, children }) => {
	const __PATH_PREFIX__ = ''
	const rootPath = `${__PATH_PREFIX__}/`
	const blogPath = `${__PATH_PREFIX__}/blog/`
	let header

	if (location.pathname === rootPath || location.pathname === blogPath) {
		header = <Header />
	} else {
		header = (
			<h3
				style={{
					fontFamily: `Montserrat, sans-serif`,
					marginTop: 0,
				}}
			>
				<Link
					style={{
						boxShadow: `none`,
						textDecoration: `none`,
						color: `inherit`,
					}}
					to={`/blog/`}
				>
					{title}
				</Link>
			</h3>
		)
	}
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
					{header}
					<main>{children}</main>
				</div>
				<StyledFooter>
					<StyledFooterContent>
						<a href="https://github.com/codyarose" target="_blank">
							github
						</a>
						<a
							href="https://www.linkedin.com/in/codyarose/"
							target="_blank"
						>
							linkedin
						</a>
						<a href="mailto:crose992@gmail.com">email</a>
					</StyledFooterContent>
				</StyledFooter>
			</Wrapper>
		</ThemeProvider>
	)
}

const Wrapper = styled.div`
	min-height: 100vh;
`

const StyledFooter = styled.footer`
	padding: ${({ theme }) => theme.spacing(2)};
	a {
		color: inherit;
		text-decoration: none;
		opacity: 0.75;
		transition: opacity 0.2s ease-out;
		&:hover {
			opacity: 1;
		}
	}
`

const StyledFooterContent = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	max-width: 960px;
	margin: 0 auto;
`

export default Layout
