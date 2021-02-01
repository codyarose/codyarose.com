import React, { FC } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SearchPosts from '../components/searchPosts'
import styled from 'styled-components'

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
			<SEO title="Blog" />
			<$Container>
				<SearchPosts
					posts={posts}
					localSearchBlog={localSearchBlog}
					navigate={navigate}
					location={location}
				/>
			</$Container>
		</Layout>
	)
}

export default Blog

const $Container = styled.div`
	padding: 5rem 0;
	${({ theme }) => theme.breakpoints.down('xs')} {
		padding: 2rem 0;
	}
`

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
