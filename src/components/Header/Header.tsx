import React, { FC, MouseEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import { Content } from '../shared/Content'
import theme from '../../theme'

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
	const blogPath = `${__PATH_PREFIX__}/blog/`
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
			document.body.style.position = isOpen ? 'fixed' : ''
		}
	}, [isOpen])

	return (
		<StyledHeader>
			<StyledContent>
				{location.pathname === blogPath && (
					<StyledTitleLink to="/">Cody Rose</StyledTitleLink>
				)}
				{isMobile && (
					<MobileToggle open={isOpen} onClick={toggleOpen} />
				)}
				<StyledLinks open={isOpen} onClickCapture={clickCapture}>
					{links.map((link, i) => (
						<Link key={i} to={link.url} activeClassName="active">
							{link.title}
						</Link>
					))}
				</StyledLinks>
			</StyledContent>
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header`
	--title-size: 2rem;
	padding: ${({ theme }) => theme.spacing(2, 0)};
	letter-spacing: 4px;
	font-size: 0.75rem;
	${({ theme }) => theme.breakpoints.down('xs')} {
		font-size: 1.5rem;
		padding: ${({ theme }) => theme.spacing(1, 0)};
	}
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

const StyledContent = styled(Content)`
	position: relative;
	display: flex;
	align-items: center;
`

const StyledTitleLink = styled(Link)`
	font-family: ${({ theme }) => theme.fontFamily.serif};
	font-size: var(--title-size);
	line-height: 1;
	letter-spacing: -0.06em;
`

const StyledLinks = styled.div<{ open: boolean }>`
	display: grid;
	column-gap: 2rem;
	line-height: var(--title-size);
	text-transform: uppercase;
	margin-left: auto;
	${({ theme }) => theme.breakpoints.down('sm')} {
		column-gap: 1rem;
	}
	${({ theme }) => theme.breakpoints.up('sm')} {
		grid-auto-flow: column;
	}
	${({ theme }) => theme.breakpoints.down('xs')} {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: ${({ theme }) => theme.colors.black};
		grid-template-rows: repeat(auto-fit, minmax(1px, min-content));
		row-gap: ${({ theme }) => theme.spacing(1)};
		justify-content: center;
		text-align: center;
		padding: ${({ theme }) => theme.spacing(3, 0)};
		opacity: ${({ open }) => (open ? 1 : 0)};
		transition: opacity 0.5s ease-out;
		z-index: 1;
		pointer-events: ${({ open }) => (open ? 'all' : 'none')};
	}

	.active {
		position: relative;
		&::after {
			position: absolute;
			content: '';
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			height: 1px;
			background-color: currentColor;
		}
	}
`

const MobileToggle = styled.button<{ open: boolean }>`
	--line-spacing: 35%;
	position: relative;
	width: 30px;
	height: 24px;
	background-color: transparent;
	border: none;
	box-shadow: none;
	margin-left: auto;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&::before,
	&::after {
		position: absolute;
		content: '';
		left: 0;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.white};
		transition: transform 0.5s cubic-bezier(0.42, 0, 0, 1),
			top 0.5s cubic-bezier(0.42, 0, 0, 1),
			bottom 0.5s cubic-bezier(0.42, 0, 0, 1);
		transform-origin: center center;
	}
	&::before {
		top: ${({ open }) => (open ? `50%` : `var(--line-spacing)`)};
		transform: ${({ open }) =>
			open
				? `rotate(45deg) translateY(-50%)`
				: `rotate(0) translateY(0)`};
	}
	&::after {
		bottom: ${({ open }) => (open ? `50%` : `var(--line-spacing)`)};
		transform: ${({ open }) =>
			open
				? `rotate(-45deg) translateY(-50%)`
				: `rotate(0) translateY(0)`};
	}
`
