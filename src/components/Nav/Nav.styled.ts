import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import StyledLink from '../shared/StyledLink'

const Header = styled.nav`
	--title-size: 2rem;
	display: flex;
	align-items: center;
	padding: ${({ theme }) => theme.spacing(1, 0)};
	letter-spacing: 4px;
	font-size: 0.75rem;
	${({ theme }) => theme.breakpoints.down('xs')} {
		--title-size: 1.5rem;
	}
`

const TitleLink = styled(GatsbyLink)`
	font-family: ${({ theme }) => theme.fontFamily.serif};
	font-size: var(--title-size);
	line-height: 1;
	letter-spacing: -0.06em;
`

const Links = styled.div`
	display: grid;
	column-gap: 1rem;
	line-height: var(--title-size);
	${({ theme }) => theme.breakpoints.up('sm')} {
		grid-auto-flow: column;
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
	padding: 0.5rem 0;
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
	TitleLink,
	Links,
	Link,
	ThemeToggle,
}
