import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FaLightbulb as LightIcon } from 'react-icons/fa'

import { Styled } from './Nav.styled'

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

interface Props {
	location: Location
	toggleTheme: () => void
}

const Header: FC<Props> = ({ location, toggleTheme }) => {
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
	const __PATH_PREFIX__ = ''
	const rootPath = `${__PATH_PREFIX__}/`

	const {
		header: { links },
	} = pageDataJson

	return (
		<Styled.Header>
			{location.pathname !== rootPath && (
				<Styled.TitleLink to="/">Cody Rose</Styled.TitleLink>
			)}
			<Styled.ThemeToggle onClick={toggleTheme}>
				<LightIcon size={16} />
			</Styled.ThemeToggle>
			<Styled.Links>
				{links.map((link, i) => (
					<Styled.Link key={i} to={link.url} activeClassName="active">
						{link.title}
					</Styled.Link>
				))}
			</Styled.Links>
		</Styled.Header>
	)
}

export default Header
