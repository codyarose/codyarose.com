import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

interface Props {
	title: string
	slug: string
	description: string
	excerpt: string
}

const BlogItem: FC<Props> = ({ title, slug, description, excerpt }) => {
	return (
		<div>
			<StyledLink to={`/blog${slug}`}>
				<StyledTitle>{title || slug}</StyledTitle>
				<StyledExcerpt
					dangerouslySetInnerHTML={{ __html: description || excerpt }}
				/>
			</StyledLink>
		</div>
	)
}

export default BlogItem

const StyledLink = styled(Link)`
	display: block;
	color: inherit;
`

const StyledTitle = styled.h3`
	position: relative;
	display: inline-block;
	font-size: 2.5rem;
	letter-spacing: -0.06em;
	margin-bottom: ${({ theme }) => theme.spacing(1)};
	${({ theme }) => theme.breakpoints.down('xs')} {
		font-size: 2rem;
	}
`

const StyledExcerpt = styled.p`
	line-height: 1.5;
`
