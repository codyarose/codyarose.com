import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Header: FC = () => {
	return (
		<StyledHeader>
			<StyledContent>
				<Link to="/blog">Blog</Link>
				<Link to="#projects">Projects</Link>
				<Link to="#about">About</Link>
			</StyledContent>
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	padding: ${({ theme }) => theme.spacing(2)};
	text-transform: uppercase;
	letter-spacing: 4px;
	font-size: 0.75rem;
	z-index: 1;
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
