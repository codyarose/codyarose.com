import styled from 'styled-components'

const Container = styled.section`
	display: grid;
	gap: 2rem;
	ul {
		list-style-type: none;
	}
`

const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: ${({ theme }) => theme.spacing(2)};
	margin: 0;
	${({ theme }) => theme.breakpoints.down('xs')} {
		grid-template-columns: 1fr;
	}
`

const Card = styled.li`
	display: flex;
	flex-direction: column;
	padding: ${({ theme }) => theme.spacing(3)};
	margin: 0;
	background-color: hsl(0, 0%, 9%);
	border-radius: 8px;
	> p {
		flex-grow: 1;
	}
	${({ theme }) => theme.breakpoints.down('xs')} {
		padding: ${({ theme }) => theme.spacing(2)};
	}
`

const Links = styled.ul`
	margin: 1.25rem 0 0;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	font-size: 0.75rem;
	a {
		display: flex;
		svg {
			margin-left: 0.5rem;
		}
	}
	> a + a {
		margin-left: 2rem;
	}
`

const Tags = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	font-size: 0.75rem;
	margin: 1.25rem 0 0;
	opacity: 0.5;
	white-space: nowrap;
	li {
		border: 1px solid currentColor;
		border-radius: 1rem;
		padding: 0.25rem 0.5rem;
		margin-right: 0.25rem;
		margin-bottom: 0.25rem;
	}
`

export const $ = {
	Container,
	List,
	Card,
	Links,
	Tags,
}
