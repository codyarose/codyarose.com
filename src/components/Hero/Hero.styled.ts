import styled from 'styled-components'

import { Content as ContentComponent } from '../shared/Content'

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: ${({ theme }) => theme.spacing(5, 0)};
	${({ theme }) => theme.breakpoints.up('md')} {
		min-height: calc(100vh - 78px);
	}
`

const Content = styled(ContentComponent)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	${({ theme }) => theme.breakpoints.up('xl')} {
		column-gap: ${({ theme }) => theme.spacing(8)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		column-gap: 7vw;
	}
	${({ theme }) => theme.breakpoints.down('sm')} {
		grid-template-columns: 1fr;
	}
`

const BioContent = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	align-items: flex-start;
	margin: 0 auto;
	${({ theme }) => theme.breakpoints.down('md')} {
		justify-content: center;
	}
`

const Title = styled.h1`
	font-weight: 300;
	line-height: 1;
	margin-bottom: 0;
	letter-spacing: -0.06em;
	font-size: 5rem;
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: 3.25rem;
	}
`

const SocialIcons = styled.div`
	display: grid;
	grid-auto-flow: column;
	font-size: 14px;
	${({ theme }) => theme.breakpoints.up('xl')} {
		column-gap: ${({ theme }) => theme.spacing(4)};
	}
	${({ theme }) => theme.breakpoints.down('lg')} {
		column-gap: 3vw;
	}
`
const SocialLink = styled.a`
	position: relative;
	color: inherit;
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
	/* padding: 5rem; */
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
	Content,
	BioContent,
	Title,
	SocialIcons,
	SocialLink,
	ImageContainer,
	ImageWrapper,
}

export default Styled
