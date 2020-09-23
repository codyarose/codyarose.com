import styled from 'styled-components'

export const Content = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: ${({ theme }) => theme.spacing(0, 5)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 0 4vw;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		max-width: 560px;
		padding: ${({ theme }) => theme.spacing(0, 2)};
	}
`
