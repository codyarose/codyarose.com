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
				<StyledFooter>
					<StyledFooterContent>
						<a href="#0">github</a>
						<a href="#0">linkedin</a>
						<a href="#0">email</a>
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
	padding: ${({ theme }) => theme.spacing(3)};
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
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
