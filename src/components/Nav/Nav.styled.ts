import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import { Content as ContentComponent } from '../shared/Content'
import StyledLink from '../shared/StyledLink'

const Header = styled.nav`
	--title-size: 2rem;
	padding: ${({ theme }) => theme.spacing(1, 0)};
	letter-spacing: 4px;
	font-size: 0.75rem;
	${({ theme }) => theme.breakpoints.down('xs')} {
		a {
			font-size: 1.5rem;
		}
	}
`

const Content = styled(ContentComponent)`
	position: relative;
	display: flex;
	align-items: center;
`

const TitleLink = styled(GatsbyLink)`
	font-family: ${({ theme }) => theme.fontFamily.serif};
	font-size: var(--title-size);
	line-height: 1;
	letter-spacing: -0.06em;
`

const Links = styled.div<{ open: boolean }>`
	display: grid;
	column-gap: 1rem;
	line-height: var(--title-size);
	${({ theme }) => theme.breakpoints.up('sm')} {
		grid-auto-flow: column;
	}
	${({ theme }) => theme.breakpoints.down('xs')} {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 100vh;
		background-color: ${({ theme }) => theme.colors.bg};
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
			bottom: 0.5rem;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			height: 1px;
			background-color: currentColor;
		}
	}
`

const Link = styled(GatsbyLink)`
	${StyledLink}
	padding: 0.5rem;
`

const MobileToggle = styled.button<{ open: boolean }>`
	--line-spacing: 35%;
	position: relative;
	width: 30px;
	height: 24px;
	background-color: transparent;
	border: none;
	box-shadow: none;
	cursor: pointer;
	color: inherit;
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
		background-color: currentColor;
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

const ThemeToggle = styled.button`
	background-color: transparent;
	color: inherit;
	border: none;
	cursor: pointer;
	margin: ${({ theme }) => theme.spacing(0, 2, 0, 1)};
	margin-left: auto;
	&:focus {
		outline: none;
	}
`

export const Styled = {
	Header,
	Content,
	TitleLink,
	Links,
	Link,
	MobileToggle,
	ThemeToggle,
}
