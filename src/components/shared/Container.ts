import styled from 'styled-components'

export const Container = styled.div`
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: ${({ theme }) => theme.spacing(9, 0)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 7.5vw 0;
	}
	${({ theme }) => theme.breakpoints.down('md')} {
		padding: ${({ theme }) => theme.spacing(5, 0)};
	}
`