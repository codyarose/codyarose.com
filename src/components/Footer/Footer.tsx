import React, { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Icon from '../shared/Icon'

interface Props {
	location: Location
}
interface FooterQuery {
	pageDataJson: {
		social: {
			github: string
			linkedin: string
			twitter: string
		}
	}
}

const Footer: FC<Props> = ({ location }) => {
	const { pageDataJson } = useStaticQuery<FooterQuery>(graphql`
		query {
			pageDataJson {
				social {
					github
					linkedin
					twitter
				}
			}
		}
	`)
	const __PATH_PREFIX__ = ''
	const rootPath = `${__PATH_PREFIX__}/`

	const { social } = pageDataJson

	return (
		<$Content>
			{location.pathname !== rootPath ? (
				<$HomeLink to="/">Cody Rose</$HomeLink>
			) : null}
			<$SocialLinks>
				<a href={social.github} title="GitHub Profile" target="_blank">
					<Icon variant="github" width="20" />
				</a>
				<a
					href={social.linkedin}
					title="LinkedIn Profile"
					target="_blank"
				>
					<Icon variant="linkedin" width="20" />
				</a>
				<a
					href={social.twitter}
					title="Twtiter Profile"
					target="_blank"
				>
					<Icon variant="twitter" width="20" />
				</a>
			</$SocialLinks>
		</$Content>
	)
}

export default Footer

const $Content = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${({ theme }) => theme.spacing(2, 0)};
`

const $HomeLink = styled(Link)`
	font-size: 1.5rem;
	font-family: ${({ theme }) => theme.fontFamily.serif};
	white-space: nowrap;
`

const $SocialLinks = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10px, min-content));
	justify-content: flex-end;
	gap: ${({ theme }) => theme.spacing(2)};
`
