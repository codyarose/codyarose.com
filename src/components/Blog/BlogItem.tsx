import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Icon from '../shared/Icon'

interface Props {
	title: string
	slug: string
	description: string
	excerpt: string
}

const BlogItem: FC<Props> = ({ title, slug, description, excerpt }) => {
	return (
		<div>
			<$Title>
				<Link to={`/blog${slug}`}>{title || slug}</Link>
			</$Title>
			<$Excerpt
				dangerouslySetInnerHTML={{ __html: description || excerpt }}
			/>
			<$ReadMoreLink to={`/blog${slug}`}>
				Read more
				<Icon variant="chevronRight" width="4" />
			</$ReadMoreLink>
		</div>
	)
}

export default BlogItem

const $Title = styled.h3`
	position: relative;
	display: inline-block;
	font-size: 2.5rem;
	letter-spacing: -0.06em;
	margin-bottom: ${({ theme }) => theme.spacing(1)};
	opacity: 0.8;
	transition: opacity 0.2s ease;
	${({ theme }) => theme.breakpoints.down('xs')} {
		font-size: 2rem;
	}
	&:hover {
		opacity: 1;
	}
`

const $Excerpt = styled.p`
	line-height: 1.5;
`

const $ReadMoreLink = styled(Link)`
	display: flex;
	align-items: center;
	&:hover svg {
		transform: translateX(3px);
	}
	svg {
		margin-left: 0.5rem;
		transition: transform 0.2s ease;
	}
`
