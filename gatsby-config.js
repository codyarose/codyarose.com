require('dotenv').config({
	path: `.env.development`,
})

module.exports = {
	siteMetadata: {
		// edit below
		title: `Cody Rose`,
		author: `Cody Rose`,
		description: `My web development portfolio and blog`,
		siteUrl: `https://codyarose.com/`,
		social: {
			twitter: ``,
		},
	},
	plugins: [
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-json`,
		{
			resolve: 'gatsby-plugin-local-search',
			options: {
				name: 'blog',
				engine: 'flexsearch',
				engineOptions: {
					encode: 'icase',
					tokenize: 'forward',
					async: false,
				},
				query: `
          {
            allMdx {
              nodes {
                id
                fields { slug }
                excerpt
                rawBody
                frontmatter {
                  title
                  description
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        `,
				ref: 'id',
				index: ['title', 'rawBody'],
				store: [
					'id',
					'slug',
					'date',
					'title',
					'excerpt',
					'description',
				],
				normalizer: ({ data }) =>
					data.allMdx.nodes.map(node => ({
						id: node.id,
						slug: node.fields.slug,
						rawBody: node.rawBody,
						excerpt: node.excerpt,
						title: node.frontmatter.title,
						description: node.frontmatter.description,
						date: node.frontmatter.date,
					})),
			},
		},
		`gatsby-plugin-feed-mdx`,
		`gatsby-plugin-root-import`,
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /svg/,
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/pageData`,
				name: `pageData`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 640,
							quality: 70,
							linkImagesToOriginal: false,
							withWebp: { quality: 70 },
							tracedSVG: true,
							grayscale: true,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							inlineCodeMarker: '>',
						},
					},
					{
						resolve: `gatsby-remark-copy-linked-files`,
					},
					{
						resolve: `gatsby-remark-smartypants`,
					},
				],
				plugins: [`gatsby-remark-images`],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GA_TRACKING_ID,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Cody Rose`,
				short_name: `Cody Rose`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#0a0500`,
				display: `minimal-ui`,
				// edit below
				icon: `content/assets/icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
}
