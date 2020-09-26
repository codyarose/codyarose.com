import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/shared/Container'
import { Content } from '../components/shared/Content'

interface Props {
	data: { site: { siteMetadata: { title: string } } }
	location: Location
}

const NotFoundPage: FC<Props> = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="404: Not Found" />
			<Container compact={true}>
				<Content>
					<h1>Whoops</h1>
					<p>
						You just hit a route that doesn&#39;t exist... the
						sadness.
					</p>
				</Content>
			</Container>
		</Layout>
	)
}

export default NotFoundPage

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
