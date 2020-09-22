import React, { FC, useState, MouseEvent } from 'react'

import { Hr } from '../Hr'
import { Text } from '../Text'
import Fade from '../Fade'
import { projects } from './data'
import { Styled } from './Projects.styled'

const Projects: FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleHover = (e: MouseEvent<HTMLLIElement>) => {
		const { value } = e.target as HTMLLIElement
		setCurrentIndex(value)
	}

	return (
		<Styled.Container>
			<Styled.Content>
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
			</Styled.Content>
		</Styled.Container>
	)
}

export default Projects
