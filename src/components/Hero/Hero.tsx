import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import $ from './Hero.styled'
import { Text } from '../shared/Text'
import Icon from '../shared/Icon'
interface Props {
	assets: {
		portrait: FluidObject | FluidObject[]
		resumePath: string
	}
}

interface HeroQuery {
	pageDataJson: {
		home: {
			hero: {
				name: string
				intro: string
				about: string
			}
		}
		social: {
			[key: string]: string
		}
	}
}

const Hero: FC<Props> = ({ assets }) => {
	const { pageDataJson } = useStaticQuery<HeroQuery>(
		graphql`
			query {
				pageDataJson {
					home {
						hero {
							name
							intro
							about
						}
					}
					social {
						github
						linkedin
						twitter
						email
					}
				}
			}
		`
	)

	const {
		home: {
			hero: { name, intro, about },
		},
		social,
	} = pageDataJson

	return (
		<$.Content>
			<$.ImageContainer>
				<$.ImageWrapper>
					<Img
						fluid={assets.portrait}
						imgStyle={{ maxHeight: '100vh' }}
					/>
				</$.ImageWrapper>
			</$.ImageContainer>
			<$.TitleArea>
				<$.Title>Hey, I'm {name}.</$.Title>
				<span>{intro}</span>
			</$.TitleArea>
			<$.About>
				<Text.Spaced>{about}</Text.Spaced>
				<$.SocialIcons>
					<a
						href={assets.resumePath}
						title="View my resume"
						target="_blank"
					>
						<Icon variant="doc" height="20" />
					</a>
					<a
						href={`mailto:${social.email}`}
						title="Email me"
						target="_blank"
					>
						<Icon variant="send" width="20" />
					</a>
					<a
						href={social.github}
						title="GitHub Profile"
						target="_blank"
					>
						<Icon variant="github" width="20" />
					</a>
					<a
						href={social.linkedin}
						title="LinkedIn Profile"
						target="_blank"
					>
						<Icon variant="linkedin" width="20" />
					</a>
					<a
						href={social.twitter}
						title="Twitter Profile"
						target="_blank"
					>
						<Icon variant="twitter" width="20" />
					</a>
				</$.SocialIcons>
			</$.About>
		</$.Content>
	)
}

export default Hero
