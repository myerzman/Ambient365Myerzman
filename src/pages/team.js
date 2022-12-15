import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export const pageQuery = graphql`
	query {
		allWpTeammember {
			nodes {
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
`;

const team = ({ data }) => {
	console.log("data team", data.allWpTeammember.nodes);
	return (
		<Layout pageName="Our Team">
			<h1 className="colorbackgroundfont">
				{" "}
				Hello! Learn about our Team{" "}
			</h1>
			<div className="teamWrapper">
				{data.allWpTeammember.nodes
					.sort((a, b) =>
						a.teamMembers.order > b.teamMembers.order ? 1 : -1
					)
					.map((person, index) => (
						<div className="person">
							{index % 2 === 0 ? (
								<>
									<div className="image">
										<img
											src={
												person.teamMembers &&
												person.teamMembers
													.featuredImage &&
												person.teamMembers.featuredImage
													.sourceUrl
											}
										/>
									</div>
									<div className="info alignLeft">
										<h3>{person.title}</h3>

										<span className="position">
											{" "}
											{person.teamMembers &&
												person.teamMembers.position &&
												person.teamMembers.position}
										</span>

										<div
											dangerouslySetInnerHTML={{
												__html: person.content,
											}}
										/>
									</div>
								</>
							) : (
								<>
									<div className="info alignRight">
										<h3>{person.title}</h3>

										<span className="position">
											{" "}
											{person.teamMembers &&
												person.teamMembers.position &&
												person.teamMembers.position}
										</span>

										<div
											dangerouslySetInnerHTML={{
												__html: person.content,
											}}
										/>
									</div>
									<div className="image">
										<img
											src={
												person.teamMembers &&
												person.teamMembers
													.featuredImage &&
												person.teamMembers.featuredImage
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
