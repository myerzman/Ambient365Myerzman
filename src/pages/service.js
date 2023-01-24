import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { ScheduleButton } from "../components/schedulebutton";
import ServiceButton from "../components/servicebutton";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function service() {
	return (
		<Layout pageName="Service">
			<GatsbySeo
      openGraph={{
        type: 'website',
        url: 'https://www.ambient365.us/service',
        title: 'Our Services | Ambient365',
        description: 'Enhance the capabilities of your business with our specialized Microsoft365 services. From business process management to technology enablement, our tailor-made solutions are crafted to optimize employee engagement and productivity. Schedule a consultation with our experts to learn more.',
	  }}
    />
			<section>
				<h2 className="grayHeading">Our Services</h2>
				<div className="item-wrapper tiles serviceTiles alt">
					<Link to="/service/communicationsmanagement">
						<ServiceButton>
							<h3>Communications Management</h3>
							<p>
								M365 Employee Experience Platform
							</p>
						</ServiceButton>
					</Link>
					<Link to="/service/technologyenablement">
						<ServiceButton>
							<h3>Technology Enablement</h3>
							<p>
								Optimization For People, Process, and Technology
							</p>
						</ServiceButton>
					</Link>
					<Link to="/service/professionalservices">
						<ServiceButton>
							<h3>Professional Services</h3>
							<p>
								Agnostic Approach With Assessment-Led Solutions
							</p>
						</ServiceButton>
					</Link>
					<Link to="/service/businessprocessmanagement">
						<ServiceButton>
							<h3> Business Process Management </h3>
							<p>
								Critical Business Processes For Employee Engagement
							</p>
						</ServiceButton>
					</Link>
					<Link to="/service/managedservices">
						<ServiceButton>
							<h3> Managed Services</h3>{" "}
							<p>
								Continuous Improvements As An Extension Of Your IT
							</p>
						</ServiceButton>
					</Link>
				</div>
			</section>
			<hr />
			<div className="item-wrapper">
				<h2 className="lowerHeading">
					{" "}
					Meet Our Ambient Consultants!{" "}
				</h2>
				{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

				<br />
				<Link to="https://meetings.hubspot.com/drotolo">
					<ScheduleButton> Schedule a Meeting </ScheduleButton>
				</Link>
			</div>
		</Layout>
	);
}
