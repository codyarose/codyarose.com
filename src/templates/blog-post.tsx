import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

// import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/shared/Container'
import { Content } from '../components/shared/Content'
import { Hr } from '../components/shared/Hr'
import Contact from '../components/Contact'

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
				featuredImage: any
			}
		}
	}
	location: Location
}

const BlogPostTemplate: FC<Props> = ({ data, location }) => {
	const post = data.mdx
	const siteTitle = data.site.siteMetadata.title
	const {
		frontmatter: { title, description, featuredImage, date },
	} = post

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={title}
				description={description || post.excerpt}
				image={featuredImage.childImageSharp.fluid.src}
			/>
			<$Content>
				<$Header>
					<h1>{title}</h1>
					<$Date>{date}</$Date>
				</$Header>
				<div>
					<Img fluid={featuredImage.childImageSharp.fluid} />
				</div>
				<$Body>
					<MDXRenderer>{post.body}</MDXRenderer>
				</$Body>
				<Hr />
				<Contact />
			</$Content>
		</Layout>
	)
}

export default BlogPostTemplate

const $Content = styled.div`
	display: grid;
	width: 100%;
	grid-auto-rows: auto;
	grid-template-columns: minmax(0, 1fr);
	gap: 4rem;
	line-height: 1.7;
	padding: 5rem 0;
	${({ theme }) => theme.breakpoints.up('sm')} {
		font-size: 18px;
	}
	${({ theme }) => theme.breakpoints.down('xs')} {
		padding: 2rem 0;
		gap: 2rem;
	}
`

const $Header = styled.div`
	text-align: center;
`

const $Date = styled.p`
	text-transform: uppercase;
	letter-spacing: 4px;
	font-size: 0.75rem;
`

const $Body = styled.div`
	a {
		color: ${({ theme }) => theme.colors.accent};
	}
	h2,
	h3 {
		margin: 2em 0 1em;
	}
	h2 {
		font-size: 1.5em;
	}
	pre {
		margin: 3rem 0;
		${({ theme }) => theme.breakpoints.down('xs')} {
			margin: 2rem 0;
		}
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
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 640, quality: 70, grayscale: true) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`
