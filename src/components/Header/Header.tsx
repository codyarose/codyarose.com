import React, { FC, MouseEvent, useEffect, useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import theme from '../../theme'
import { Styled } from './Header.styled'

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
}

const Header: FC<Props> = ({ location }) => {
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
	const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.values.sm })

	const {
		header: { links },
	} = pageDataJson

	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}
	const clickCapture = (e: MouseEvent<HTMLDivElement>) => {
		const { target, currentTarget } = e
		target !== currentTarget && setIsOpen(!isOpen)
	}

	useEffect(() => {
		if (isMobile) {
			document.body.style.height = isOpen ? '100vh' : ''
			document.body.style.overflowY = isOpen ? 'hidden' : ''
		}
	}, [isOpen])

	return (
		<Styled.Header>
			<Styled.Content>
				{location.pathname !== rootPath && (
					<Styled.TitleLink to="/">Cody Rose</Styled.TitleLink>
				)}
				{isMobile && (
					<Styled.MobileToggle open={isOpen} onClick={toggleOpen} />
				)}
				<Styled.Links open={isOpen} onClickCapture={clickCapture}>
					{links.map((link, i) => (
						<Link key={i} to={link.url} activeClassName="active">
							{link.title}
						</Link>
					))}
				</Styled.Links>
			</Styled.Content>
		</Styled.Header>
	)
}

export default Header
