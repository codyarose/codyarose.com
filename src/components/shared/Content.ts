import styled from 'styled-components'

export const Content = styled.div`
	width: 100%;
	max-width: 1120px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
	margin: 0 auto;
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: ${({ theme }) => theme.spacing(0, 5)};
		column-gap: ${({ theme }) => theme.spacing(8)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 0 4vw;
		column-gap: 7vw;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		max-width: 560px;
		grid-template-columns: 1fr;
		padding: ${({ theme }) => theme.spacing(0, 2)};
	}
`
