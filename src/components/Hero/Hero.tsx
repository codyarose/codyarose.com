import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { Content } from '../shared/Content'
import Styled from './Hero.styled'
import { Hr } from '../shared/Hr'
import { Text } from '../shared/Text'

interface Props {
	portrait: FluidObject | FluidObject[]
}

interface HeroQuery {
	pageDataJson: {
		home: {
			hero: {
				name: string
				position: string
				intro: string
			}
		}
		social: {
			title: string
			url: string
		}[]
	}
}

const Hero: FC<Props> = ({ portrait }) => {
	const { pageDataJson } = useStaticQuery<HeroQuery>(
		graphql`
			query {
				pageDataJson {
					home {
						hero {
							name
							position
							intro
						}
					}
					social {
						title
						url
					}
				}
			}
		`
	)

	const {
		home: {
			hero: { name, position, intro },
		},
		social,
	} = pageDataJson

	return (
		<Styled.Container>
			<Content grid={true}>
				<Styled.BioContent>
					<Styled.Title>{name}</Styled.Title>
					<Hr />
					<Text.Spaced>{position}</Text.Spaced>
					<br />
					<Text.Spaced>{intro}</Text.Spaced>
					<Hr />
					<Styled.SocialIcons>
						{social.map((link, i) => (
							<Styled.SocialLink
								key={i}
								href={link.url}
								target="_blank"
							>
								{link.title}
							</Styled.SocialLink>
						))}
					</Styled.SocialIcons>
				</Styled.BioContent>
				<Styled.ImageContainer>
					<Styled.ImageWrapper>
						<Img
							fluid={portrait}
							imgStyle={{ maxHeight: '100vh' }}
						/>
					</Styled.ImageWrapper>
				</Styled.ImageContainer>
			</Content>
		</Styled.Container>
	)
}

export default Hero
