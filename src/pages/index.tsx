import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'
import Hero from '../components/Hero'

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
			<h1>
				Hey people{' '}
				<span role="img" aria-label="wave emoji">
					👋
				</span>
			</h1>
			<p>
				Welcome to your new Gatsby website. You are on your home page.
			</p>
			<p>
				This starter comes out of the box with styled components and
				Gatsby's default starter blog running on Netlify CMS.
			</p>
			<p>Now go build something great!</p>
			<Link to="/blog/">
				<Button marginTop="35px">Go to Blog</Button>
			</Link>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query PortraitQuery {
		file(relativePath: { eq: "portrait.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 448, quality: 100) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
