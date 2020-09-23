import React, { FC } from 'react'
import styled from 'styled-components'

import { Container } from '../shared/Container'
import { Content } from '../shared/Content'
import { Text } from '../shared/Text'
import { Hr } from '../shared/Hr'

const About: FC = () => {
	return (
		<Container id="about">
			<Content>
				<div>
					<Text.Spaced>About</Text.Spaced>
					<Hr />
				</div>
				<StyledTextSection>
					<StyledText>
						I'm a Front End Developer in Austin, TX interested in
						working (remotely) on challenging projects using React
						and Typescript.
					</StyledText>
					<StyledText>
						I have several years of agency experience building
						websites from design mockups, but my knowledge of React
						is all self-taught.
					</StyledText>
				</StyledTextSection>
			</Content>
		</Container>
	)
}

export default About

const StyledTextSection = styled.div`
	grid-row: 2;
	grid-column: 1 / -1;
`

const StyledText = styled(Text.Spaced).attrs({ as: 'p' })`
	font-size: 1.25rem;
	margin-bottom: 2rem;
`
