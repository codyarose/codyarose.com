import React, { FC, useState, MouseEvent } from 'react'
import styled from 'styled-components'
import { FaGithub as GithubIcon } from 'react-icons/fa'

import { Hr } from '../Hr'
import { Text } from '../Text'
import Fade from '../Fade'
import { projects } from './data'

const Projects: FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleHover = (e: MouseEvent<HTMLLIElement>) => {
		const { value } = e.target as HTMLLIElement
		setCurrentIndex(value)
	}

	return (
		<StyledContainer>
			<StyledContent>
				<StyledTitle>
					<StyledH2>Projects</StyledH2>
					<Hr />
				</StyledTitle>
				<StyledDescriptionContainer>
					{projects.map((project, i) => (
						<StyledDescription key={i}>
							<Fade show={currentIndex === i}>
								<p>{project.desc}</p>
								<a
									href={`https://github.com/codyarose/${project.githubSlug}`}
									target="_blank"
								>
									<GithubIcon color="#fff" size="24" />
								</a>
							</Fade>
						</StyledDescription>
					))}
				</StyledDescriptionContainer>
				<StyledProjects>
					<div />
					<StyledProjectsList>
						{projects.map((project, i) => (
							<StyledProjectItem
								key={i}
								onMouseEnter={handleHover}
								value={i}
								active={currentIndex === i}
							>
								{project.title}
							</StyledProjectItem>
						))}
					</StyledProjectsList>
				</StyledProjects>
			</StyledContent>
		</StyledContainer>
	)
}

export default Projects

const StyledContainer = styled.section`
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: ${({ theme }) => theme.spacing(28, 0)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 11vw 0;
	}
`

const StyledContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
`

const StyledDescriptionContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 560px;
	padding: ${({ theme }) => theme.spacing(0, 8.75)};
	justify-self: flex-end;
	grid-row: 2;
	grid-column: 1;
	& > * {
		position: absolute;
		top: 0;
		left: 0;
		padding: inherit;
	}
`

const StyledTitle = styled.div`
	width: 100%;
	max-width: 560px;
	padding: ${({ theme }) => theme.spacing(0, 8.75)};
	justify-self: flex-end;
	margin-bottom: 0;
`

const StyledH2 = styled.h2`
	text-transform: uppercase;
	font-family: ${({ theme }) => theme.fontFamily.sansSerif};
	font-weight: 400;
`

const StyledDescription = styled(Text.Spaced)`
	margin: 0;
`

const StyledProjects = styled.div`
	grid-row: 2;
	margin-top: -3.5rem;
`

const StyledProjectsList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: ${({ theme }) => theme.spacing(0, 8.75)};
	font-size: 4.5rem;
	letter-spacing: -4px;
	font-family: ${({ theme }) => theme.fontFamily.serif};
	margin: 0;
	list-style-type: none;
`

interface ProjectItemProps {
	active: boolean
}
const StyledProjectItem = styled.li<ProjectItemProps>`
	--spacing: ${({ theme }) => theme.spacing(3.5)};
	--default-showing: 10px;
	position: relative;
	padding-left: var(--spacing);
	padding-right: var(--default-showing);
	opacity: ${({ active }) => (active ? 1 : 0.75)};
	cursor: default;
	overflow: hidden;
	transition: opacity 0.2s ease-out;
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
	}
`
