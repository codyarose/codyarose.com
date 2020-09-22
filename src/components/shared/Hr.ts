import styled from 'styled-components'

export const Hr = styled.hr`
	width: 100%;
	background-color: currentColor;
	${({ theme }) => theme.breakpoints.up('xl')} {
		margin: 3.5rem 0;
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		margin: 3vw 0;
	}
	${({ theme }) => theme.breakpoints.down('md')} {
		margin: 2.5rem 0;
	}
`
