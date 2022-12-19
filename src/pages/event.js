import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

import "./event.css";

export const pageQuery = graphql`
	query {
		allWpPost(sort: { fields: [date] }) {
			edges {
				node {
					title
					content
					excerpt
					slug
					customDate: date(formatString: "MMMM mm, yyyy")
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
				<h2 className="grayheading">Our Events</h2>
				<div className="events">
					{" "}
					{data.allWpPost.edges.map(({ node }) => {
						return (
							<div className="eventWrapper" key={node.slug}>
								<h2>{node.title}</h2>
								<div className="date">{node.customDate}</div>
								<div
									dangerouslySetInnerHTML={{
										__html: node.excerpt,
									}}
								/>
								<Link to={`../${node.slug}`}>
									<button>Read more</button>
								</Link>
							</div>
						);
					})}
				</div>
			</>
		</Layout>
	);
};

export default event;
