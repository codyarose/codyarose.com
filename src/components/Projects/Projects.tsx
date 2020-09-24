import React, { FC, useState, MouseEvent } from 'react'

import { Hr } from '../shared/Hr'
import { Text } from '../shared/Text'
import Fade from '../shared/Fade'
import { Styled } from './Projects.styled'
import { Container } from '../shared/Container'
import { Content } from '../shared/Content'
import { graphql, useStaticQuery } from 'gatsby'

interface ProjectsQuery {
	pageDataJson: {
		projects: {
			title: string
			githubSlug: string
			description: string
		}[]
	}
}

const Projects: FC = () => {
	const { pageDataJson } = useStaticQuery<ProjectsQuery>(graphql`
		query {
			pageDataJson {
				projects {
					title
					githubSlug
					description
				}
			}
		}
	`)
	const { projects } = pageDataJson

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
								<p>{project.description}</p>
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
