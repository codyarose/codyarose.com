import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/shared/button'
import SearchPosts from '../components/searchPosts'

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
			<SEO title="All posts" />
			<Bio />
			<SearchPosts
				posts={posts}
				localSearchBlog={localSearchBlog}
				navigate={navigate}
				location={location}
			/>
			<Link to="/">
				<Button marginTop="85px">Go Home</Button>
			</Link>
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
