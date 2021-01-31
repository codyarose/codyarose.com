import React, { FC } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import $ from './Hero.styled'
import { Text } from '../shared/Text'

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
					<a href={assets.resumePath} title="Resume">
						<svg
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 384 512"
							role="img"
						>
							<title>View my resume</title>
							<path
								fill="currentColor"
								d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
							/>
						</svg>
					</a>
					<a href={social.email}>
						<svg
							width="20"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							role="img"
						>
							<title>Email me</title>
							<path
								fill="currentColor"
								d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
							/>
						</svg>
					</a>
					<a href={social.github}>
						<svg
							width="20"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
						>
							<title>GitHub Profile</title>
							<path
								fill="currentColor"
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/>
						</svg>
					</a>
					<a href={social.linkedin}>
						<svg
							width="20"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
						>
							<title>LinkedIn Profile</title>
							<path
								fill="currentColor"
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
					</a>
					<a href={social.twitter}>
						<svg
							width="20"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							role="img"
						>
							<title>Twitter Profile</title>
							<path
								fill="currentColor"
								d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
							/>
						</svg>
					</a>
				</$.SocialIcons>
			</$.About>
		</$.Content>
	)
}

export default Hero
