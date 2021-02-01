import React, { FC } from 'react'

import { $ } from './Projects.styled'
import { Text } from '../shared/Text'
import { graphql, useStaticQuery } from 'gatsby'
import Icon from '../shared/Icon'

interface ProjectsQuery {
	pageDataJson: {
		home: {
			projects: {
				intro: string
				list: {
					title: string
					githubUrl: string
					description: string
					demo: string
					tags: string[]
				}[]
			}
		}
	}
}

const Projects: FC = () => {
	const { pageDataJson } = useStaticQuery<ProjectsQuery>(graphql`
		query {
			pageDataJson {
				home {
					projects {
						intro
						list {
							title
							githubUrl
							description
							demo
							tags
						}
					}
				}
			}
		}
	`)
	const {
		home: { projects },
	} = pageDataJson

	return (
		<$.Container>
			<div>
				<h2>Projects</h2>
				<Text.Spaced as="p">{projects.intro}.</Text.Spaced>
			</div>
			<$.List>
				{projects.list.map(project => (
					<$.Card key={project.title}>
						<h3>{project.title}</h3>
						<Text.Spaced as="p">{project.description}</Text.Spaced>
						<$.Links>
							{project.githubUrl ? (
								<a
									href={project.githubUrl}
									title={`${project.title} GitHub Repository`}
									target="_blank"
								>
									Code
									<Icon variant="chevronRight" width="6" />
								</a>
							) : null}
							{project.demo ? (
								<a href={project.demo} target="_blank">
									Demo
									<Icon variant="chevronRight" width="6" />
								</a>
							) : null}
						</$.Links>
						{project.tags ? (
							<$.Tags>
								{project.tags.map(tag => (
									<li>{tag}</li>
								))}
							</$.Tags>
						) : null}
					</$.Card>
				))}
			</$.List>
		</$.Container>
	)
}

export default Projects
