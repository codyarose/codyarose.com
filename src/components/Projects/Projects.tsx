import React, { FC } from 'react'
import styled from 'styled-components'

const Projects: FC = () => {
	return <Container>Projects</Container>
}

export default Projects

const Container = styled.section`
	background-color: ${({ theme }) => theme.colors.black};
`
