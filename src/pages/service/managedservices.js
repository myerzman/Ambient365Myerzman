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
// import "../main.css";

//Icons
import empowering from "../../images/empowering.png";
import servanthearted from "../../images/servanthearted.png";
import responsible from "../../images/responsible.png";
import committed from "../../images/committed.png";
import aspirational from "../../images/aspirational.png";

const managedservices = () => {
	return (
		<Layout pageName="Managed Services">
			<div className="white">
				{/* <h1>Managed Services</h1> */}
				<div className="multiParagraph">
					<h2>Alleviating Cumbersome Issues</h2>
					<h3> All-in-One Solution for IT Environment </h3>
					<p>
					Managed services is about leveraging outside expertise to eliminate the need for expensive in-house IT resources. Let the specialists handle your IT services and focus your efforts on areas that add value to your business. At Ambient365, we offer Managed Services in cloud productivity and hosting, software development and operations (DevOps) as well as business intelligence and data analytics.{" "}
				</p>
				</div>
				
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
				<img src={committed} alt="Committed" width={70} height={70}/> 
				<span className="caption">Committed</span>
				</div>
				<div className="reacticon"> 
				<img src={aspirational} alt="Aspirational" width={70} height={70}/> 
				<span className="caption">Aspirational</span>
				</div>
				<div className="reacticon"> 
				<img src={responsible} alt="Responsible" width={70} height={70}/> 
				<span className="caption">Responsible</span>
				</div>
				<div className="reacticon"> 
				<img src={empowering} alt="empowering" width={70} height={70}/> 
				<span className="caption">empowering</span>
				</div>
				<div className="reacticon"> 
				<img src={servanthearted} alt="Servant-hearted" width={70} height={70}/> 
				<span className="caption">Servant-hearted</span>
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
