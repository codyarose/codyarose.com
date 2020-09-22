import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

interface Props {
	location: Location
	data: any
}

const IndexPage: FC<Props> = ({ data, location }) => {
	const siteTitle = 'Gatsby Starter Personal Website'
	const portrait = data.file.childImageSharp.fluid

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title="Home"
				keywords={[`blog`, `gatsby`, `javascript`, `react`]}
			/>
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
