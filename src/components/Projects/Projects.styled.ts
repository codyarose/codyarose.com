import styled from 'styled-components'

import { Text } from '../shared/Text'

const Content = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
	${({ theme }) => theme.breakpoints.down('sm')} {
		grid-template-columns: 1fr;
	}
`

const DescriptionContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 560px;
	justify-self: flex-end;
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: ${({ theme }) => theme.spacing(0, 8.75)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 0 4vw;
	}
	${({ theme }) => theme.breakpoints.up('md')} {
		grid-row: 2;
		grid-column: 1;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		display: none;
	}
	& > * {
		position: absolute;
		top: 0;
		left: 0;
		padding: inherit;
	}
`

const Title = styled.div`
	width: 100%;
	max-width: 560px;
	margin-bottom: 0;
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: ${({ theme }) => theme.spacing(0, 8.75)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 0 4vw;
	}
	${({ theme }) => theme.breakpoints.up('md')} {
		justify-self: flex-end;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		margin: 0 auto;
		padding: 0 1.5rem;
	}
`

const H2 = styled.h2`
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fontFamily.sansSerif};
	font-weight: 400;
`

const Description = styled(Text.Spaced)`
	margin: 0;
`

const Projects = styled.div`
	grid-row: 2;
	${({ theme }) => theme.breakpoints.up('md')} {
		margin-top: -3.5rem;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		margin: 0 auto;
	}
`

const ProjectsList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-size: 4.5rem;
	letter-spacing: -4px;
	font-family: ${({ theme }) => theme.fontFamily.serif};
	margin: 0;
	list-style-type: none;
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: ${({ theme }) => theme.spacing(0, 8.75)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		font-size: 4rem;
		padding: 0 4vw;
	}
	${({ theme }) => theme.breakpoints.down('md')} {
		font-size: 3rem;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		align-items: center;
		padding: 0 1.5rem;
	}
	${({ theme }) => theme.breakpoints.down(500)} {
		font-size: 2.5rem;
	}
`

interface ProjectItemProps {
	active: boolean
}
const ProjectItem = styled.li<ProjectItemProps>`
	opacity: ${({ active }) => (active ? 1 : 0.75)};
	transition: opacity 0.2s ease-out;
	${({ theme }) => theme.breakpoints.up('md')} {
		--spacing: ${({ theme }) => theme.spacing(3.5)};
		--default-showing: 10px;
		position: relative;
		padding-left: var(--spacing);
		padding-right: var(--default-showing);
		overflow: hidden;
		&::before {
			position: absolute;
			content: '';
			top: 50%;
			left: 0;
			transform: ${({ active }) =>
				active
					? `translate(0, -50%)`
					: `translate(calc(-100% + var(--default-showing)), -50%)`};
			width: 100%;
			height: 1px;
			background-color: currentColor;
			transition: transform 0.5s cubic-bezier(0.42, 0, 0, 1);
			pointer-events: none;
		}
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`

export const Styled = {
	Content,
	DescriptionContainer,
	Title,
	H2,
	Description,
	Projects,
	ProjectsList,
	ProjectItem,
}
