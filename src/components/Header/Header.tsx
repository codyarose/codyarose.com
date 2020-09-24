import React, { FC } from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

interface HeaderQuery {
	pageDataJson: {
		header: {
			links: {
				title: string
				url: string
			}[]
		}
	}
}

const Header: FC = () => {
	const { pageDataJson } = useStaticQuery<HeaderQuery>(graphql`
		query {
			pageDataJson {
				header {
					links {
						title
						url
					}
				}
			}
		}
	`)

	const {
		header: { links },
	} = pageDataJson

	return (
		<StyledHeader>
			<StyledContent>
				{links.map((link, i) => (
					<Link key={i} to={link.url}>
						{link.title}
					</Link>
				))}
			</StyledContent>
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header`
	padding: ${({ theme }) => theme.spacing(2)};
	text-transform: uppercase;
	letter-spacing: 4px;
	font-size: 0.75rem;
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

const StyledContent = styled.div`
	width: 100%;
	max-width: 960px;
	margin: 0 auto;
	display: grid;
	column-gap: 2rem;
	grid-auto-flow: column;
	justify-content: center;
`
