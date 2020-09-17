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
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	align-items: flex-start;
	@media screen and (min-width: 1600px) {
		padding: 0 70px 140px;
	}
	@media screen and (max-width: 1599px) {
		padding: 0 4vw 8.5vw;
	}
	@media screen and (max-width: 1200px) {
		padding-bottom: 15vw;
	}
	@media screen and (max-width: 1024px) {
		padding: 4vw;
		justify-content: center;
	}
	@media screen and (max-width: 768px) {
		padding: 1.5rem;
	}
`

const Title = styled.h1`
	font-weight: 300;
	line-height: 1.2;
	letter-spacing: -5px;
	margin-bottom: 0;
	@media screen and (min-width: 1600px) {
		font-size: 7rem;
	}
	@media screen and (max-width: 1599px) {
		font-size: 7vw;
	}
	@media screen and (max-width: 1024px) {
		letter-spacing: -2px;
	}
	@media screen and (max-width: 768px) {
		letter-spacing: 0;
		font-size: 52px;
	}
`

const Hr = styled.hr`
	width: 100%;
	background: currentColor;
	@media screen and (min-width: 1600px) {
		margin: 3rem 0;
	}
	@media screen and (max-width: 1599px) {
		margin: 3vw 0;
	}
	@media screen and (max-width: 768px) {
		margin: 2rem 0;
	}
`

const BioText = styled.div`
	display: grid;
	grid-template-columns: 1fr 1.7fr;
	column-gap: 2rem;
	@media screen and (min-width: 1600px) {
		column-gap: 2rem;
	}
	@media screen and (max-width: 1599px) {
		column-gap: 2vw;
	}
	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr;
		row-gap: 2rem;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1.7fr;
		column-gap: 4vw;
	}
	& > * {
		font-size: 1rem;
		font-weight: inherit;
		letter-spacing: 2px;
		line-height: 1.7;
		margin-bottom: 0;
		@media screen and (max-width: 768px) {
			letter-spacing: 0;
		}
	}
`

const SocialContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1.7fr;
	column-gap: 2rem;
	@media screen and (min-width: 1600px) {
		column-gap: 2rem;
	}
	@media screen and (max-width: 1599px) {
		column-gap: 2vw;
	}
	a {
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
	}
`

const SocialIcons = styled.div`
	font-size: 1.25rem;
	display: grid;
	grid-auto-flow: column;
	justify-content: flex-start;
	@media screen and (min-width: 1600px) {
		column-gap: 5.25rem;
	}
	@media screen and (max-width: 1599px) {
		column-gap: 5.25vw;
	}
`

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	@media screen and (max-width: 768px) {
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
	BioText,
	SocialContainer,
	SocialIcons,
	ImageContainer,
	ImageWrapper,
}

export default Styled
