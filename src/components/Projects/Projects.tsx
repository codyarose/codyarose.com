import React, { FC, useState, MouseEvent } from 'react'

import { Hr } from '../shared/Hr'
import { Text } from '../shared/Text'
import Fade from '../shared/Fade'
import { projects } from './data'
import { Styled } from './Projects.styled'
import { Container } from '../shared/Container'
import { Content } from '../shared/Content'

const Projects: FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleHover = (e: MouseEvent<HTMLLIElement>) => {
		const { value } = e.target as HTMLLIElement
		setCurrentIndex(value)
	}

	return (
		<Container id="projects">
			<Content>
				<Styled.Title>
					<Styled.H2>
						<Text.Spaced>Projects</Text.Spaced>
					</Styled.H2>
					<Hr />
				</Styled.Title>
				<Styled.DescriptionContainer>
					{projects.map((project, i) => (
						<Styled.Description key={i}>
							<Fade show={currentIndex === i}>
								<p>{project.desc}</p>
							</Fade>
						</Styled.Description>
					))}
				</Styled.DescriptionContainer>
				<Styled.Projects>
					<div />
					<Styled.ProjectsList>
						{projects.map((project, i) => (
							<Styled.ProjectItem
								key={i}
								onMouseEnter={handleHover}
								value={i}
								active={currentIndex === i}
							>
								<a
									href={`https://github.com/codyarose/${project.githubSlug}`}
									target="_blank"
								>
									{project.title}
								</a>
							</Styled.ProjectItem>
						))}
					</Styled.ProjectsList>
				</Styled.Projects>
			</Content>
		</Container>
	)
}

export default Projects
