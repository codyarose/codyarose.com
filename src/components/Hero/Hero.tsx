import React, { FC } from 'react'
import Img from 'gatsby-image'

import Styled from './Hero.styled'
import { Link } from 'gatsby'

interface Props {
	portrait: any
}

const Hero: FC<Props> = ({ portrait }) => {
	return (
		<Styled.Container>
			<Styled.BioContainer>
				<Styled.Header>
					<a href="#0">Projects</a>
					<Link to="/blog">Blog</Link>
				</Styled.Header>
				<Styled.BioContent>
					<Styled.Title>Cody Rose</Styled.Title>
					<Styled.Hr />
					<Styled.BioColumns>
						<h2>Front End Developer</h2>
						<p>
							I'm an Austin based developer that loves building
							beautiful, challenging UI with React and Typescript.
						</p>
					</Styled.BioColumns>
					<Styled.Hr />
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
