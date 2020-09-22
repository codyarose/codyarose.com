import styled from 'styled-components'

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: ${({ theme }) => theme.spacing(18, 0)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 7.5vw 0;
	}
	${({ theme }) => theme.breakpoints.down('md')} {
		padding: ${({ theme }) => theme.spacing(11, 0)};
	}
`
