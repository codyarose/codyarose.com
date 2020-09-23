import React, { FC } from 'react'
import styled from 'styled-components'

import { Container } from '../shared/Container'
import { Text } from '../shared/Text'
import { Hr } from '../shared/Hr'

const About: FC = () => {
	return (
		<Container id="about">
			<StyledContent>
				<Text.Spaced>About</Text.Spaced>
				<Hr />
				<StyledText>
					I'm a Front End Developer in Austin, TX interested in
					working (remotely) on challenging projects using React and
					Typescript.
				</StyledText>
				<StyledText>
					I have several years of agency experience building websites
					from design mockups, but my knowledge of React is all
					self-taught.
				</StyledText>
			</StyledContent>
		</Container>
	)
}

export default About

const StyledContent = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: ${({ theme }) => theme.spacing(0, 4)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 0 4vw;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		padding: 0 1.5rem;
		max-width: 560px;
	}
`

const StyledText = styled(Text.Spaced).attrs({ as: 'p' })`
	font-size: 1.5rem;
	margin-bottom: 2rem;
`
