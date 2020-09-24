import React, { FC } from 'react'
import styled from 'styled-components'

import { Container } from '../shared/Container'
import { Content } from '../shared/Content'
import { Text } from '../shared/Text'
import { Hr } from '../shared/Hr'
import { graphql, useStaticQuery } from 'gatsby'

interface AboutQuery {
	pageDataJson: {
		about: string[]
	}
}

const About: FC = () => {
	const { pageDataJson } = useStaticQuery<AboutQuery>(graphql`
		query {
			pageDataJson {
				about
			}
		}
	`)
	const { about } = pageDataJson
	return (
		<Container id="about">
			<Content grid={true}>
				<div>
					<Text.Spaced>About</Text.Spaced>
					<Hr />
				</div>
				<StyledTextSection>
					{about.map((item, i) => (
						<StyledText key={i}>{item}</StyledText>
					))}
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
