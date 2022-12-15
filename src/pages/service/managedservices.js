import React from "react";
import Layout from "../../components/Layout";
import footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import MainButton from "../../components/mainbutton";
import { Link } from "gatsby";
import ScheduleButton from "../../components/schedulebutton";
import HubspotForm from "react-hubspot-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { GiFist } from "react-icons/Gi";
import { BiGlasses } from "react-icons/Bi";
import { BiDonateHeart } from "react-icons/Bi";
import { FaRegHandshake } from "react-icons/Fa";
import { BiHomeHeart } from "react-icons/Bi";
// import "../main.css";

const managedservices = () => {
	return (
		<Layout pageName="Managed Services">
			<div className="white">
				{/* <h1>Managed Services</h1>
				<h3> Description about Managed Services</h3> */}
				<p>
					At Ambient365 we understand the driving force of any
					business is its people. Our mentoring and best practices
					approach to people, process, and technology allows an
					organization to see their investment in a digital platform
					that helps organizations create a thriving culture within an
					employee experience platform.{" "}
				</p>
			</div>
			<div className="darkText">
				<h4>How We Can Help</h4>
				<p>
					{" "}
					Ambient365 leverages M365 to help our client achieves xyz to
					yield x outcome
				</p>
			</div>
			<div className="tile-wrapper">
				<MainButton>
					{" "}
					<Link to="/service/communicationsmanagement">
						{" "}
						communications Management{" "}
					</Link>
				</MainButton>
				<MainButton>
					{" "}
					<Link to="/service/technologyenablement">
						{" "}
						Technology Enablement{" "}
					</Link>
				</MainButton>
				<MainButton>
					{" "}
					<Link to="/service/professionalservices">
						{" "}
						Professional Services{" "}
					</Link>
				</MainButton>
				<MainButton>
					{" "}
					<Link to="/service/businessprocessmanagement">
						{" "}
						Business Process Management{" "}
					</Link>
				</MainButton>
				<MainButton>
					{" "}
					<Link to="/service/managedservices">
						{" "}
						Managed Services{" "}
					</Link>
				</MainButton>
			</div>

			<h1>Ambient's core values for your enterprise needs</h1>
			<div className="icon-wrapper">
				<div className="reacticon">
					<FaRegHandshake size={70} />{" "}
					<span className="caption"> Committed </span>
				</div>
				<div className="reacticon">
					<BiGlasses size={70} />{" "}
					<span className="caption"> Aspirational </span>
				</div>
				<div className="reacticon">
					<BiDonateHeart size={70} />{" "}
					<span className="caption">Responsible </span>
				</div>
				<div className="reacticon">
					<GiFist size={70} />{" "}
					<span className="caption"> Empowering</span>
				</div>
				<div className="reacticon">
					<BiHomeHeart size={70} />{" "}
					<span className="caption">Servant-hearted</span>{" "}
				</div>
			</div>

			<h2 className="lowerHeading"> Meet Our Ambient Consultants! </h2>
			<Link to="https://meetings.hubspot.com/drotolo">
				<ScheduleButton> Schedule a Meeting </ScheduleButton>
			</Link>
			<Container>
				<h4> Schedule a Demo </h4>
				<HubspotForm
					portalId="6383339"
					formId="489a18f4-d81c-4723-a5fd-b0c16037febe"
					onSubmit={() => console.log("Submit!")}
					onReady={(form) => console.log("Form ready!")}
					loading={<div>Loading...</div>}
				/>
			</Container>
		</Layout>
	);
};

export default managedservices;
