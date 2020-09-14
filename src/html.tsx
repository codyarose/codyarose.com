import React, { FC } from 'react'

interface Props {
	htmlAttributes: {}
	headComponents: unknown[]
	bodyAttributes: {}
	preBodyComponents: unknown[]
	postBodyComponents: unknown[]
	body: string
}

const HTML: FC<Props> = ({
	htmlAttributes,
	headComponents,
	bodyAttributes,
	preBodyComponents,
	postBodyComponents,
	body,
}) => {
	return (
		<html {...htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<link
					type="application/opensearchdescription+xml"
					rel="search"
					href="opensearch.xml"
				/>
				{headComponents}
			</head>
			<body {...bodyAttributes}>
				{preBodyComponents}
				<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: body }}
				/>
				{postBodyComponents}
			</body>
		</html>
	)
}

export default HTML
