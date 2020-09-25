import styled from 'styled-components'

export const Content = styled.div<{ grid?: boolean }>`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	padding: ${({ theme }) => theme.spacing(0, 5)};
	${({ theme }) => theme.breakpoints.down('sm')} {
		max-width: 560px;
		padding: ${({ theme }) => theme.spacing(0, 2)};
	}
	${({ grid, theme }) =>
		grid &&
		`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto;
	${theme.breakpoints.up('xl')} {
		column-gap: ${theme.spacing(8)};
	}
	${theme.breakpoints.down('lg')} {
		column-gap: 7vw;
	}
	${theme.breakpoints.down('sm')} {
		grid-template-columns: 1fr;
	}
	`}
`
