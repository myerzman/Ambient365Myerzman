import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

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
					customDate: date(formatString: "MMMM DD, yyyy")
					categories {
						nodes {
							name
						}
					}
				}
			}
		}
	}
`;

const event = ({ data }) => {
	console.log("my data,", data);
	return (
		<Layout pageName="Events">
			<GatsbySeo
      openGraph={{
        type: 'website',
        url: 'https://www.ambient365.us/events',
        title: 'Ambient365 Event',
        description: 'Stay informed about upcoming events and webinars related to Microsoft365 by visiting our events page. Ambient365 offers a variety of educational and networking opportunities to help you stay ahead of the curve.',
	  }}
    />
			<>
				<h2 className="grayheading">Our Events</h2>
				<div className="events">
					{" "}
					{data.allWpPost.edges.filter(post => post.node.categories.nodes[0].name === "Webinar").reverse().map(({ node }) => {
						return (
							<div className="eventWrapper" key={node.slug}>
								<h2>{node.title}</h2>
								
								<div className="date">{node.customDate}</div>
								<div className="categories">
									{node.categories.nodes.map(cat => 
										<div className="cat-item" key={cat.id}>{cat.name}</div>
								)} </div> 
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
