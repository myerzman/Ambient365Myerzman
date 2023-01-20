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
					customDate: date(formatString: "MMMM mm, yyyy")
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

const news = ({ data }) => {
	console.log("my data,", data);
	return (
		<Layout pageName="News">
		<GatsbySeo
      openGraph={{
        type: 'website',
        url: 'https://www.ambient365.us/news',
        title: 'Ambient365 News',
        description: 'Stay informed about the latest developments and trends in Microsoft365 for your business. Ambient365 offers updates on our services, upcoming events, and industry insights to help you stay ahead of the curve',
	  }}
    />
			<>
				<h2 className="grayheading">Our News</h2>
				<div className="events">
					{" "}
					{data.allWpPost.edges.filter(post => post.node.categories.nodes[0].name !== "Webinar").map(({ node }) => {
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

export default news;
