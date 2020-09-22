import styled from 'styled-components'

const Spaced = styled.span`
	line-height: 1.7;
	${({ theme }) => theme.breakpoints.up('lg')} {
		letter-spacing: 1px;
	}
`

export const Text = {
	Spaced,
}
