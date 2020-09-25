import styled from 'styled-components'

export const Container = styled.div<{ compact?: boolean }>`
	${({ compact, theme }) =>
		compact
			? `
		padding: ${theme.spacing(3, 0)};
		${theme.breakpoints.down('xs')} {
			padding: ${theme.spacing(2, 0)};
		}
			`
			: `
		${theme.breakpoints.up('xl')} {
			padding: ${theme.spacing(9, 0)};
		}
		${theme.breakpoints.down('lg')} {
			padding: 7.5vw 0;
		}
		${theme.breakpoints.down('md')} {
			padding: ${theme.spacing(5, 0)};
		}
	`}
`
