import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import { rhythm, scale } from '../utils/typography'
import theme from '../theme'
import GlobalStyles from '../theme/globalStyles'

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
		header = (
			<h1
				style={{
					...scale(1.5),
					marginBottom: rhythm(1.5),
					marginTop: 0,
				}}
			>
				<Link
					style={{
						boxShadow: `none`,
						textDecoration: `none`,
						color: `inherit`,
					}}
					to={location.pathname === blogPath ? `/blog/` : `/`}
				>
					{title}
				</Link>
			</h1>
		)
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
					{/* <header>{header}</header> */}
					<main>{children}</main>
				</div>
				<Footer>
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a>
				</Footer>
			</Wrapper>
		</ThemeProvider>
	)
}

const Wrapper = styled.div`
	min-height: 100vh;
`

const Footer = styled.footer`
	text-align: center;
	margin: 24px;
`

export default Layout
