import React, { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import theme from '../theme'
import GlobalStyles from '../theme/globalStyles'
import Header from './Header'

interface Props {
	location: Location
	title: string
}

interface SocialQuery {
	pageDataJson: {
		social: {
			title: string
			url: string
		}[]
	}
}

const Layout: FC<Props> = ({ location, children }) => {
	const { pageDataJson } = useStaticQuery<SocialQuery>(graphql`
		query {
			pageDataJson {
				social {
					title
					url
				}
			}
		}
	`)
	const { social } = pageDataJson

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
				<StyledFooter>
					<StyledFooterContent>
						{social.map((link, i) => (
							<a key={i} href={link.url} target="_blank">
								{link.title}
							</a>
						))}
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
