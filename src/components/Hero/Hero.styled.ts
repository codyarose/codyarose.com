import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-color: ${({ theme }) => theme.colors.white};
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
	font-weight: 300;
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
	padding: 0 70px 106px;
	font-weight: 300;
`

const Title = styled.h1`
	font-size: 7rem;
	font-weight: 300;
	line-height: 1.2;
	letter-spacing: -5px;
	margin-bottom: 0;
`

const Hr = styled.hr`
	width: 100%;
	background: currentColor;
	margin: 48px 0;
`

const BioText = styled.div`
	display: grid;
	grid-template-columns: 1fr 1.7fr;
	column-gap: 2rem;
	& > * {
		font-size: 1rem;
		font-weight: inherit;
		letter-spacing: 2px;
		line-height: 1.7;
		margin-bottom: 0;
	}
`

const SocialContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1.7fr;
	column-gap: 2rem;
	a {
		color: inherit;
		display: flex;
	}
`

const SocialIcons = styled.div`
	font-size: 1.25rem;
	display: grid;
	grid-auto-flow: column;
	justify-content: flex-start;
	column-gap: 5.25rem;
`

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem;
`

const ImageWrapper = styled.div`
	width: 100%;
	max-width: 448px;
	/* position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); */
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
