

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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-R8PJWKKHM8", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
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
