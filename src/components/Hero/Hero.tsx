import React, { FC } from 'react'
import Img from 'gatsby-image'

import { Content } from '../shared/Content'
import Styled from './Hero.styled'
import { Hr } from '../shared/Hr'
import { Text } from '../shared/Text'

interface Props {
	portrait: any
}

const Hero: FC<Props> = ({ portrait }) => {
	return (
		<Styled.Container>
			<Content>
				<Styled.BioContent>
					<Styled.Title>Cody Rose</Styled.Title>
					<Hr />
					<Text.Spaced>Front End Developer</Text.Spaced>
					<br />
					<Text.Spaced>
						I'm an Austin based developer that loves building
						beautiful, challenging UI with React and Typescript.
					</Text.Spaced>
					<Hr />
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
