import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export const pageQuery = graphql`
	query {
		allWpTeammember {
			edges{
			node {
				title
				content
				teamMembers {
					position
					order
					featuredImage {
						sourceUrl
					}
				}
			}
		}
		}
	}
`;

const team = ({ data }) => {
	console.log("data team", data.allWpTeammember.edges);
	return (
		<Layout pageName="Our Team">
			<h1 className="colorbackgroundfont">Meet the Team</h1>
			<div className="teamWrapper">
				{data.allWpTeammember.edges
					.sort((a, b) =>
						a.node.teamMembers.order > b.node.teamMembers.order ? 1 : -1
					)
					.map((person, index) => (
						<div className="person">
							{index % 2 === 0 ? (
								<>
									<div className="image">
										<img
											src={
												person.node.teamMembers &&
												person.node.teamMembers
													.featuredImage &&
												person.node.teamMembers.featuredImage
													.sourceUrl
											}
										/>
									</div>
									<div className="info alignLeft">
										<h3>{person.node.title}</h3>

										<span className="position">
											{" "}
											{person.node.teamMembers &&
												person.node.teamMembers.position &&
												person.node.teamMembers.position}
										</span>

										<div
											dangerouslySetInnerHTML={{
												__html: person.node.content,
											}}
										/>
									</div>
								</>
							) : (
								<>
									<div className="mobile-only image">
										<img
											src={
												person.node.teamMembers &&
												person.node.teamMembers
													.featuredImage &&
												person.node.teamMembers.featuredImage
													.sourceUrl
											}
										/>
									</div>
									<div className="info alignRight">
										<h3>{person.node.title}</h3>

										<span className="position">
											{" "}
											{person.node.teamMembers &&
												person.node.teamMembers.position &&
												person.node.teamMembers.position}
										</span>

										<div
											dangerouslySetInnerHTML={{
												__html: person.node.content,
											}}
										/>
									</div>
									<div className="desktop-only image">
										<img
											src={
												person.node.teamMembers &&
												person.node.teamMembers
													.featuredImage &&
												person.node.teamMembers.featuredImage
													.sourceUrl
											}
										/>
									</div>
								</>
							)}
						</div>
					))}
			</div>
		</Layout>
	);
};

export default team;
