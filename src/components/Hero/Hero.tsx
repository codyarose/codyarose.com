import React, { FC } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

import Styled from './Hero.styled'
import { Hr } from '../shared/Hr'
import { Text } from '../shared/Text'

interface Props {
	portrait: any
}

const Hero: FC<Props> = ({ portrait }) => {
	return (
		<Styled.Container>
			<Styled.BioContainer>
				<Styled.BioContent>
					<Styled.Title>Cody Rose</Styled.Title>
					<Hr />
					<Styled.BioColumns>
						<Text.Spaced>Front End Developer</Text.Spaced>
						<Text.Spaced>
							I'm an Austin based developer that loves building
							beautiful, challenging UI with React and Typescript.
						</Text.Spaced>
					</Styled.BioColumns>
					<Hr />
					<Styled.BioColumns>
						<Styled.SocialIcons>
							<Styled.SocialLink
								href="https://github.com/codyarose"
								target="_blank"
							>
								github
							</Styled.SocialLink>
							<Styled.SocialLink
								href="https://www.linkedin.com/in/codyarose/"
								target="_blank"
							>
								linkedin
							</Styled.SocialLink>
							<Styled.SocialLink href="mailto:crose992@gmail.com">
								email
							</Styled.SocialLink>
						</Styled.SocialIcons>
					</Styled.BioColumns>
				</Styled.BioContent>
			</Styled.BioContainer>
			<Styled.ImageContainer>
				<Styled.ImageWrapper>
					<Img fluid={portrait} imgStyle={{ maxHeight: '100vh' }} />
				</Styled.ImageWrapper>
			</Styled.ImageContainer>
		</Styled.Container>
	)
}

export default Hero
