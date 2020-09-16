import React, { FC } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Img from 'gatsby-image'

import Styled from './Hero.styled'

interface Props {
	portrait: any
}

const Hero: FC<Props> = ({ portrait }) => {
	return (
		<Styled.Container>
			<Styled.BioContainer>
				<Styled.Header>
					<a href="#0">Projects</a>
					<a href="#0">Blog</a>
				</Styled.Header>
				<Styled.BioContent>
					<Styled.Title>Cody Rose</Styled.Title>
					<Styled.Hr />
					<Styled.BioText>
						<h2>Front End Developer</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque nisi metus, dignissim ac lobortis id,
							lacinia a odio.
						</p>
					</Styled.BioText>
					<Styled.Hr />
					<Styled.SocialContainer>
						<div />
						<Styled.SocialIcons>
							<a href="#github">
								<FaGithub />
							</a>
							<a href="#linkedin">
								<FaLinkedinIn />
							</a>
							<a href="#email">
								<MdEmail />
							</a>
						</Styled.SocialIcons>
					</Styled.SocialContainer>
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
