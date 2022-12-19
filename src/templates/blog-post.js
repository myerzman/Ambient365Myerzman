import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

export default ({ data }) => {
	const post = data.allWpPost.edges[0].node;
	console.log(post);
	return (
		<Layout>
			<Link className="returnLink" to="/event">
				Back to Events
			</Link>

			<div className="events">
				<h1>{post.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.content }} />

				<p> On: {post.date} </p>
			</div>
			<Link className="returnLink bottom" to="/event">
				Back to Events
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
				}
			}
		}
	}
`;
