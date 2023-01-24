

module.exports = {
	siteMetadata: {
		siteUrl: `https://www.ambient365.us`,
	},
	plugins: [
		
		{
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.ambient365.us',
          site_name: 'Ambient365',
        },
      },
    },
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			},
		},
		{
			resolve: `gatsby-source-graphql`,
			options: {
				// This type will contain remote schema Query type
				typeName: `WPGraphQL`,
				// This is field under which it's accessible
				fieldName: `wpgraphql`,
				// Url to query from
				url: `https://www.ambientstudios.com/graphql`,
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			includedRoutes: [
				"**/categories",
				"**/posts",
				"**/pages",
				"**/media",
				"**/tags",
				"**/taxonomies",
				"**/users",
				"**/teammember",
			],
			verboseOutput: false,
			options: {
				url:
					// allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
					process.env.WPGRAPHQL_URL ||
					`https://www.ambientstudios.com/graphql`,

				schema: {
					//Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
					typePrefix: `Wp`,
				},
				restApiRoutePrefix: "wp-json",

				develop: {
					//caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
					hardCacheMediaFiles: true,
				},
				useACF: true,
				acfOptionPageIds: [],
				// verboseOutput: false,
				type: {
					Post: {
						limit:
							process.env.NODE_ENV === `development`
								? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
								  50
								: // and we don't actually need more than 5000 in production for this particular site
								  5000,
					},
				},
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
			// Generate PWA icons and a favicon
			icon: 'src/images/favicon-32x32.png',
			}
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [
					`https://fonts.googleapis.com`,
					`https://fonts.gstatic.com`,
				],
				web: [
					{
						name: `Montserrat`,
						file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap`,
					},
					{
						name: `Open Sans`,
						file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap`,
					},
				],
			},
		},
	],
};
