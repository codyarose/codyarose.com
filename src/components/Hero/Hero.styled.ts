import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-color: ${({ theme }) => theme.colors.white};
	font-weight: 400;
	${({ theme }) => theme.breakpoints.down('sm')} {
		grid-template-columns: 1fr;
	}
`

const BioContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	display: grid;
	grid-template-rows: auto 1fr;
`

const Header = styled.header`
	padding: 1.5rem;
	font-size: 0.75rem;
	text-transform: uppercase;
	display: grid;
	column-gap: 2rem;
	grid-auto-flow: column;
	justify-content: flex-end;
	align-self: flex-start;
	a {
		color: inherit;
		text-decoration: none;
		letter-spacing: 4px;
	}
`

const BioContent = styled.div`
	justify-self: flex-end;
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	align-items: flex-start;
	max-width: 950px;
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: 0 5rem 10rem;
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 0 4vw 8vw;
	}
	${({ theme }) => theme.breakpoints.down('md')} {
		padding-bottom: 14vw;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		justify-content: center;
		padding: 4vw;
	}
	${({ theme }) => theme.breakpoints.down('xs')} {
		padding: 1.5rem;
	}
`

const Title = styled.h1`
	font-weight: 300;
	line-height: 1.2;
	margin-bottom: 0;
	${({ theme }) => theme.breakpoints.up('xl')} {
		font-size: 7rem;
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		font-size: 6vw;
	}
	${({ theme }) => theme.breakpoints.up('md')} {
		letter-spacing: -5px;
	}
	${({ theme }) => theme.breakpoints.between('sm', 'md')} {
		letter-spacing: -2px;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: 3.25rem;
	}
`

const Hr = styled.hr`
	width: 100%;
	background: currentColor;
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

const BioColumns = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1.7fr;
	${({ theme }) => theme.breakpoints.up('xl')} {
		column-gap: 2rem;
	}
	${({ theme }) => theme.breakpoints.between('sm', 'lg')} {
		column-gap: 2vw;
	}
	${({ theme }) => theme.breakpoints.down('xs')} {
		grid-template-columns: 1fr;
		row-gap: 2rem;
	}
	& > * {
		font-size: 1rem;
		font-weight: inherit;
		line-height: 1.7;
		margin-bottom: 0;
		${({ theme }) => theme.breakpoints.up('lg')} {
			letter-spacing: 2px;
		}
	}
`

const SocialIcons = styled.div`
	grid-column: 2;
	display: grid;
	grid-auto-flow: column;
	justify-content: flex-start;
	font-size: 1.25rem;
	${({ theme }) => theme.breakpoints.up('xl')} {
		column-gap: 5.25rem;
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		column-gap: 4.5vw;
	}
`
const SocialLink = styled.a`
	color: inherit;
	font-size: 14px;
	letter-spacing: 2px;
	text-decoration: none;
	opacity: 0.75;
	border-bottom: 1px solid transparent;
	transition: opacity 0.2s ease-in-out, border-color 0.2s ease-in-out;
	&:hover {
		opacity: 1;
		border-color: currentColor;
	}
`

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5rem;
	${({ theme }) => theme.breakpoints.down('sm')} {
		display: none;
	}
`

const ImageWrapper = styled.div`
	width: 100%;
	max-width: 448px;
`

const Styled = {
	Container,
	BioContainer,
	Header,
	BioContent,
	Title,
	Hr,
	BioColumns,
	SocialIcons,
	SocialLink,
	ImageContainer,
	ImageWrapper,
}

export default Styled
