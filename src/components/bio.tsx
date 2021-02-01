import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Image from 'gatsby-image'
import styled from 'styled-components'

const Bio: FC = () => {
	return (
		<StaticQuery
			query={bioQuery}
			render={data => {
				const { author } = data.site.siteMetadata
				return (
					<StyledBio>
						{/* <Image
							fixed={data.avatar.childImageSharp.fixed}
							alt={author}
						/> */}
						<p>
							Hey! I'm {author}, an Austin based developer that
							loves building beautiful, challenging UI with React
							and Typescript.
						</p>
					</StyledBio>
				)
			}}
		/>
	)
}

const StyledBio = styled.div`
	display: grid;
	grid-template-columns: min-content auto;
	column-gap: 2rem;
	align-items: center;
`

const bioQuery = graphql`
	query BioQuery {
		# avatar: file(relativePath: { eq: "portrait.jpg" }) {
		# 	childImageSharp {
		# 		fixed(width: 100, quality: 100) {
		# 			...GatsbyImageSharpFixed
		# 		}
		# 	}
		# }
		site {
			siteMetadata {
				author
			}
		}
	}
`

export default Bio
