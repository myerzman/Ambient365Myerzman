import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { ScheduleButton } from "../components/schedulebutton";
import Images from "../examples/images";
import ServiceButton from "../components/servicebutton";
export default function service() {
	return (
		<Layout pageName="Service">
			<section>
				<h2 className="grayHeading">Our Services</h2>
				<div className="item-wrapper tiles serviceTiles alt">
					<Link to="/service/communicationsmanagement">
						<ServiceButton>
							<h3>Communications Management</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</ServiceButton>
					</Link>
					<Link to="/service/technologyenablement">
						<ServiceButton>
							<h3>Technology Enablement</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</ServiceButton>
					</Link>
					<Link to="/service/professionalservices">
						<ServiceButton>
							<h3>Professional Services</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</ServiceButton>
					</Link>
					<Link to="/service/businessprocessmanagement">
						<ServiceButton>
							<h3> Business Process Management </h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</ServiceButton>
					</Link>
					<Link to="/service/managedservices">
						<ServiceButton>
							<h3> Managed Services</h3>{" "}
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
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
