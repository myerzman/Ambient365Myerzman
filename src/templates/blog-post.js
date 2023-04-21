import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import banner from "../images/Copy-of-Ambient-365-December-Webinar-1.png";

export default ({ data }) => {
	const post = data.allWpPost.edges[0].node;
	console.log(post);
	return (
		<Layout>
			<Helmet>
				<meta charset="UTF-8" />
				<meta property="og:image" content={banner} class="yoast-seo-meta-tag" />
				<meta property="og:image:width" content="1024" class="yoast-seo-meta-tag" />
				<meta property="og:image:height" content="536" class="yoast-seo-meta-tag" />
				<meta property="og:image:type" content="image/png" class="yoast-seo-meta-tag"></meta>
				<meta
					property="og:url"
					content="https://www.ambient365.us/internal-communications-getting-the-most-out-of-current-m365-investments-communications-for-hr-retention-intranet-refresh/"
					class="yoast-seo-meta-tag"
				></meta>
				<title>{`${post.title} | Ambient365`}</title>
				<meta property="og:site_name" content="Ambient Studios" class="yoast-seo-meta-tag" />
				<meta name="title" property="og:title" content={`${post.title} | Ambient365`}></meta>
				<meta
					name="msapplication-TileImage"
					content="https://www.ambientstudios.com/wp-content/uploads/cropped-logo-ambient-studios-transparent-512x512-270x270.png"
				></meta>
			</Helmet>
			<Link className="returnLink" to="/event">
				Back
			</Link>

			<div className="events">
				<h1>{post.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.content }} />

				<p> On: {post.date} </p>
			</div>
			{post.featuredImage && (
				<img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
			)}
			<Link className="returnLink bottom" to="/event">
				Back
			</Link>
		</Layout>
	);
};

export const query = graphql`
	query ($slug: String!) {
		allWpPost(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					title
					content
					slug
					date(formatString: "MM-DD-YYYY")
					featuredImage {
						node {
							altText
							sourceUrl
						}
					}
				}
			}
		}
	}
`;
