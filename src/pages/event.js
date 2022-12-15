import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export const pageQuery = graphql`
	query {
		allWpPost(sort: { fields: [date] }) {
			edges {
				node {
					title
					content
				}
			}
		}
	}
`;

const event = ({ data }) => {
	console.log("my data,", data);
	return (
		<Layout>
			<>
				{" "}
				{data.allWpPost.edges.map(({ node }) => (
					<div className="eventWrapper">
						<h1>{node.title}</h1>
						<div
							dangerouslySetInnerHTML={{ __html: node.content }}
							className="fullPageBg"
						/>
					</div>
				))}
			</>
		</Layout>
	);
};

export default event;
