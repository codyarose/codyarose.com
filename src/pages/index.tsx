import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Header from '../components/Header'

interface Props {
	location: Location
	data: any
}

const IndexPage: FC<Props> = ({ data, location }) => {
	const siteTitle = 'Cody Rose'
	const portrait = data.file.childImageSharp.fluid

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
			<Header />
			<Hero portrait={portrait} />
			<Projects />
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query PortraitQuery {
		file(relativePath: { eq: "portrait.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 448, quality: 100) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`
