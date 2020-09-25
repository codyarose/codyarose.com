import React, { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import { Content } from '../shared/Content'
import StyledLink from '../shared/StyledLink'

interface FooterQuery {
	pageDataJson: {
		social: {
			title: string
			url: string
		}[]
	}
}

const Footer: FC = () => {
	const { pageDataJson } = useStaticQuery<FooterQuery>(graphql`
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
		<StyledContent>
			<StyledLinks>
				<Link to="/blog">Blog</Link>
				{social.map((link, i) => (
					<a key={i} href={link.url}>
						{link.title}
					</a>
				))}
			</StyledLinks>
		</StyledContent>
	)
}

export default Footer

const StyledContent = styled(Content)`
	grid-row-start: 2;
	grid-row-end: 3;
	display: flex;
	&& {
		padding-top: ${({ theme }) => theme.spacing(1)};
		padding-bottom: ${({ theme }) => theme.spacing(1)};
	}

	a {
		${StyledLink}
		padding: 0.5rem;
	}
`

const StyledLinks = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 1rem;
	margin-left: auto;

	${({ theme }) => theme.breakpoints.down('xs')} {
		grid-template-columns: min-content min-content;
		grid-template-rows: auto auto;
		text-align: center;
		margin: 0 auto;
	}
`
