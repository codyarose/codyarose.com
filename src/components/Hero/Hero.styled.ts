import styled from 'styled-components'

const Content = styled.header`
	display: grid;
	grid-template-columns: minmax(150px, 0.4fr) 1fr;
	grid-auto-rows: auto;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing(4, 2)};
	padding: ${({ theme }) => theme.spacing(0, 5)};
	${({ theme }) => theme.breakpoints.down('xs')} {
		grid-template-columns: 1fr;
		row-gap: ${({ theme }) => theme.spacing(3)};
		padding: ${({ theme }) => theme.spacing(0, 2)};
	}
`

const TitleArea = styled.div`
	align-self: flex-end;
	font-size: 1.5rem;
`

const Title = styled.h1`
	font-weight: 300;
	line-height: 1;
	margin-bottom: 1rem;
	letter-spacing: -0.06em;
	font-size: 4rem;
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: 3.25rem;
	}
`

const About = styled.div`
	grid-column: 1 / -1;
`

const SocialIcons = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10px, min-content));
	gap: ${({ theme }) => theme.spacing(2)};
	margin-top: ${({ theme }) => theme.spacing(2)};
`

const ImageContainer = styled.div`
	display: flex;
	border-radius: 50%;
	overflow: hidden;
	${({ theme }) => theme.breakpoints.down('xs')} {
		display: none;
	}
`

const ImageWrapper = styled.div`
	width: 100%;
`

const $ = {
	Content,
	TitleArea,
	Title,
	About,
	SocialIcons,
	ImageContainer,
	ImageWrapper,
}

export default $
