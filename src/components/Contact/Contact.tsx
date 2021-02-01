import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Text } from '../shared/Text'
import styled from 'styled-components'

interface Props {}

interface ContactQuery {
	pageDataJson: {
		home: {
			contact: {
				title: string
				intro: string
			}
		}
		social: {
			[key: string]: string
		}
	}
}

const Contact: FC<Props> = () => {
	const { pageDataJson } = useStaticQuery<ContactQuery>(
		graphql`
			query {
				pageDataJson {
					home {
						contact {
							title
							intro
						}
					}
					social {
						email
					}
				}
			}
		`
	)
	const {
		home: { contact },
		social: { email },
	} = pageDataJson
	return (
		<$Container>
			<h2>{contact.title}</h2>
			<Text.Spaced as="p">{contact.intro}</Text.Spaced>
			<a href={`mailto:${email}`}>{email}</a>
		</$Container>
	)
}

export default Contact

const $Container = styled.section`
	a {
		position: relative;
		font-size: 1.5rem;
		&::after {
			content: '';
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			border-bottom: 1px solid currentColor;
			transition: transform 0.3s ease;
		}
		&:hover:after {
			transform: translateY(3px);
		}
	}
`
