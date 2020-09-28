import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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
			<Container compact={true}>
				<StyledContent compact={true}>
					<StyledTitle>{title}</StyledTitle>
					<StyledDate>{date}</StyledDate>
					<StyledImgWrapper>
						<Img fluid={featuredImage.childImageSharp.fluid} />
					</StyledImgWrapper>
					<StyledBody>
						<MDXRenderer>{post.body}</MDXRenderer>
					</StyledBody>
					<StyledHr />
					<Bio />
				</StyledContent>
			</Container>
		</Layout>
	)
}

export default BlogPostTemplate

const StyledContent = styled(Content)`
	font-size: 18px;
	line-height: 1.7;
`

const StyledTitle = styled.h1`
	text-align: center;
`

const StyledDate = styled.p`
	text-transform: uppercase;
	text-align: center;
	letter-spacing: 4px;
	font-size: 0.75rem;
`

const StyledImgWrapper = styled.div`
	padding-top: ${({ theme }) => theme.spacing(2)};
`

const StyledBody = styled.div`
	padding-top: ${({ theme }) => theme.spacing(3)};
	${({ theme }) => theme.breakpoints.down('xs')} {
		padding-top: ${({ theme }) => theme.spacing(2)};
	}

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
`

const StyledHr = styled(Hr)`
	margin: ${({ theme }) => theme.spacing(4, 0)};
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
