import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SearchPosts from '../components/searchPosts'
import { Content } from '../components/shared/Content'
import { Container } from '../components/shared/Container'

interface AllMdx {
	edges: { node: { id: string } }[]
}

interface Props {
	data: {
		site: {
			siteMetadata: {
				title: string
			}
		}
		allMdx: AllMdx
		localSearchBlog: {
			[key: string]: string
		}
	}
	navigate: () => void
	location: Location
}

const Blog: FC<Props> = ({ data, navigate, location }) => {
	const siteTitle = data.site.siteMetadata.title
	const posts = data.allMdx.edges
	const localSearchBlog = data.localSearchBlog

	return (
		<Layout location={location} title={siteTitle}>
			<Container compact={true}>
				<Content>
					<SEO title="Blog" />
					<SearchPosts
						posts={posts}
						localSearchBlog={localSearchBlog}
						navigate={navigate}
						location={location}
					/>
				</Content>
			</Container>
		</Layout>
	)
}

export default Blog

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		localSearchBlog {
			index
			store
		}
		allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`
