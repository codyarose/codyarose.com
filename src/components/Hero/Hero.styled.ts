import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	min-height: calc(100vh - 62px);
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};
	font-weight: 400;
	${({ theme }) => theme.breakpoints.down('sm')} {
		grid-template-columns: 1fr;
	}
`

const BioContainer = styled.div`
	display: grid;
	grid-template-rows: auto;
`

const BioContent = styled.div`
	justify-self: flex-end;
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	align-items: flex-start;
	max-width: 850px;
	${({ theme }) => theme.breakpoints.up('xl')} {
		padding: 0 5rem 10rem;
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		padding: 0 4vw 8vw;
	}
	${({ theme }) => theme.breakpoints.down('md')} {
		justify-content: center;
		padding: 4vw;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		margin: 0 auto;
	}
	${({ theme }) => theme.breakpoints.down('xs')} {
		padding: 1.5rem;
	}
`

const Title = styled.h1`
	font-weight: 300;
	line-height: 1;
	margin-bottom: 0;
	letter-spacing: -0.06em;
	${({ theme }) => theme.breakpoints.up('xl')} {
		font-size: 7rem;
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		font-size: 6vw;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: 3.25rem;
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
	${({ theme }) => theme.breakpoints.down('md')} {
		column-gap: 3vw;
	}
`
const SocialLink = styled.a`
	position: relative;
	display: block;
	color: inherit;
	font-size: 14px;
	letter-spacing: 2px;
	text-decoration: none;
	padding: 0 0.25rem;
	opacity: 0.75;
	transition: opacity 0.2s ease-in-out;
	overflow: hidden;
	&::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 0;
		width: 100%;
		height: 0.5px;
		background-color: currentColor;
		transform: translate(-100%, -50%);
		transition: transform 0.5s cubic-bezier(0.42, 0, 0, 1);
	}
	&:hover {
		opacity: 1;
		&::before {
			transform: translate(0, -50%);
		}
	}
`

const ImageContainer = styled.div`
	display: flex;
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
	BioContent,
	Title,
	BioColumns,
	SocialIcons,
	SocialLink,
	ImageContainer,
	ImageWrapper,
}

export default Styled
