import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import styled from 'styled-components'

interface Props {
	location: Location
	data: any
}

const IndexPage: FC<Props> = ({ data, location }) => {
	const siteTitle = 'Cody Rose'
	const assets = {
		portrait: data.file.childImageSharp.fluid,
		resumePath: data.allFile.edges[0].node.publicURL,
	}

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title="Home"
				keywords={[
					`Cody Rose`,
					`front end developer`,
					`blog`,
					`gatsby`,
					`javascript`,
					`react`,
				]}
			/>
			<$Grid>
				<Hero assets={assets} />
				<Projects />
				<About />
			</$Grid>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query HeroAssetsQuery {
		file(relativePath: { eq: "portrait-small.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 250, quality: 100) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		allFile(filter: { name: { regex: "/resume/i" } }) {
			edges {
				node {
					publicURL
				}
			}
		}
	}
`

const $Grid = styled.div`
	display: grid;
	justify-content: center;
	row-gap: 9rem;
	padding-top: 5rem;
	${({ theme }) => theme.breakpoints.down('xs')} {
		row-gap: 5rem;
		padding-top: 2rem;
	}
`
