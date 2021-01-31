import React, { FC, useState, MouseEvent } from 'react'

import { $ } from './Projects.styled'
import { graphql, useStaticQuery } from 'gatsby'

interface ProjectsQuery {
	pageDataJson: {
		home: {
			projects: {
				title: string
				githubSlug: string
				description: string
			}[]
		}
	}
}

const Projects: FC = () => {
	const { pageDataJson } = useStaticQuery<ProjectsQuery>(graphql`
		query {
			pageDataJson {
				home {
					projects {
						title
						githubSlug
						description
					}
				}
			}
		}
	`)
	const {
		home: { projects },
	} = pageDataJson

	return <div id="projects">projects</div>
}

export default Projects
