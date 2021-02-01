import React, { useState, FC } from 'react'
import styled from 'styled-components'
import { useFlexSearch } from 'react-use-flexsearch'
import * as queryString from 'query-string'

import BlogItem from './Blog/BlogItem'

interface Result {
	title: string
	slug: string
	description: string
	excerpt: string
}

const SearchedPosts: FC<{ results: Result[] }> = ({ results }): any => {
	return results.length > 0 ? (
		results.map(node => {
			return <BlogItem key={node.slug} {...node} />
		})
	) : (
		<p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
			Sorry, couldn't find any posts matching this search.
		</p>
	)
}

interface Post {
	node: {
		id: string
		frontmatter?: {
			title: string
			description: string
			excerpt: string
		}
		fields?: {
			slug: string
		}
		excerpt?: string
	}
}

const AllPosts: FC<{ posts: Post[] }> = ({ posts }) => (
	<>
		{posts.map(({ node }) => {
			const title = node.frontmatter?.title || node.fields?.slug || ''
			const slug = node.fields?.slug || ''
			return (
				<BlogItem
					key={node.fields?.slug}
					title={title}
					slug={slug}
					description={node.frontmatter?.description || ''}
					excerpt={node.excerpt || ''}
				/>
			)
		})}
	</>
)

interface Props {
	posts: Post[]
	localSearchBlog: {
		[key: string]: string
	}
	location: Location
	navigate: (value: string) => void
}

const SearchPosts: FC<Props> = ({
	posts,
	localSearchBlog,
	location,
	navigate,
}) => {
	const { search } = queryString.parse(location.search)
	const [query, setQuery] = useState(search || '')

	const results = useFlexSearch(
		query,
		localSearchBlog.index,
		JSON.parse(localSearchBlog.store)
	)

	return (
		<>
			<$SearchBar>
				<svg
					focusable="false"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
				</svg>
				<input
					id="search"
					type="search"
					placeholder="Search posts"
					value={query}
					onChange={e => {
						navigate(
							e.target.value
								? `/blog/?search=${e.target.value}`
								: '/blog/'
						)
						setQuery(e.target.value)
					}}
				/>
			</$SearchBar>
			<$BlogList>
				{query ? (
					<SearchedPosts results={results} />
				) : (
					<AllPosts posts={posts} />
				)}
			</$BlogList>
		</>
	)
}

export default SearchPosts

const $SearchBar = styled.div`
	width: 100%;
	max-width: 560px;
	height: 3rem;
	display: grid;
	grid-template-columns: 20px auto;
	align-items: center;
	column-gap: ${({ theme }) => theme.spacing(1)};
	color: inherit;
	border-bottom: 1px solid currentColor;
	margin: ${({ theme }) => theme.spacing(0, 'auto', 2)};
	${({ theme }) => theme.breakpoints.up('sm')} {
		padding: ${({ theme }) => theme.spacing(0, 1)};
	}

	svg {
		height: 20px;
		width: 20px;
		color: currentColor;
		fill: currentColor;
	}

	input {
		width: 100%;
		height: 100%;
		font-size: 1rem;
		background-color: transparent;
		border: none;
		margin: 0;
		padding: 0;
		padding-right: 0.5rem;
		color: currentColor;
		word-wrap: break-word;
		outline: none;
	}
`

const $BlogList = styled.div`
	display: grid;
	grid-auto-rows: auto;
	gap: ${({ theme }) => theme.spacing(4)};
	padding-top: ${({ theme }) => theme.spacing(4)};
	${({ theme }) => theme.breakpoints.down('xs')} {
		padding-top: ${({ theme }) => theme.spacing(2)};
		gap: ${({ theme }) => theme.spacing(2)};
	}
`
