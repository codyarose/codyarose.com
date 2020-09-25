import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/shared/Container'
import { Content } from '../components/shared/Content'
import { Hr } from '../components/shared/Hr'

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
	location: Location
}

const BlogPostTemplate: FC<Props> = ({ data, location }) => {
	const post = data.mdx
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<Container compact={true}>
				<Content compact={true}>
					<StyledTitle>{post.frontmatter.title}</StyledTitle>
					<StyledDate>{post.frontmatter.date}</StyledDate>
					<StyledBody>
						<MDXRenderer>{post.body}</MDXRenderer>
					</StyledBody>
					<Hr />
					<Bio />
				</Content>
			</Container>
		</Layout>
	)
}

export default BlogPostTemplate

const StyledTitle = styled.h1`
	text-align: center;
`

const StyledDate = styled.p`
	text-transform: uppercase;
	text-align: center;
	letter-spacing: 4px;
	font-size: 0.75rem;
`

const StyledBody = styled.div`
	padding: ${({ theme }) => theme.spacing(3, 0)};
	font-size: 18px;
	line-height: 1.7;
	${({ theme }) => theme.breakpoints.down('xs')} {
		padding: ${({ theme }) => theme.spacing(1, 0)};
	}

	a {
		color: ${({ theme }) => theme.colors.accent};
		text-decoration: none;
	}
	h2,
	h3 {
		margin: 2em 0 1em;
	}
	h2 {
		font-size: 1.5em;
	}
`

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
