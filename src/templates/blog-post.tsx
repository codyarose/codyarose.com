import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

interface Props {
	data: {
		site: {
			siteMetadata: { title: string }
		}
		mdx: {
			excerpt: string
			body: string
			frontmatter: {
				title: string
				description: string
				date: string
			}
		}
	}
	pageContext: {
		previous: {
			fields: { slug: string }
			frontmatter: { title: string }
		}
		next: {
			fields: { slug: string }
			frontmatter: { title: string }
		}
	}
	location: Location
}

const BlogPostTemplate: FC<Props> = ({ data, pageContext, location }) => {
	const post = data.mdx
	const siteTitle = data.site.siteMetadata.title
	const { previous, next } = pageContext

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<h1>{post.frontmatter.title}</h1>
			<p
				style={{
					...scale(-1 / 5),
					display: `block`,
					marginBottom: rhythm(1),
					marginTop: rhythm(-1),
				}}
			>
				{post.frontmatter.date}
			</p>
			<MDXRenderer>{post.body}</MDXRenderer>
			<hr
				style={{
					marginBottom: rhythm(1),
				}}
			/>
			<Bio />

			<ul
				style={{
					display: `flex`,
					flexWrap: `wrap`,
					justifyContent: `space-between`,
					listStyle: `none`,
					padding: 0,
				}}
			>
				<li>
					{previous && (
						<Link to={`/blog${previous.fields.slug}`} rel="prev">
							← {previous.frontmatter.title}
						</Link>
					)}
				</li>
				<li>
					{next && (
						<Link to={`/blog${next.fields.slug}`} rel="next">
							{next.frontmatter.title} →
						</Link>
					)}
				</li>
			</ul>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			body
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`
