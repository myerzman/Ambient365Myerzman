import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

export default ({ data }) => {
	const post = data.allWpPost.edges[0].node;
	console.log(post);
	return (
		<Layout>
			<Helmet>
				<html lang="en" />

				{post.featuredImage && (
					<meta
						property="og:image"
						content={post.featuredImage.node.sourceUrl}
						class="yoast-seo-meta-tag"
					></meta>
				)}
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
