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

// Modal
import { ModalProvider } from "react-modal-hook";
import TechnologyModal from "./TechnologyModal";

//Icons
import empowering from "../../images/empowering.png";
import servanthearted from "../../images/servanthearted.png";
import responsible from "../../images/responsible.png";
import committed from "../../images/committed.png";
import aspirational from "../../images/aspirational.png";

const technologyenablement = () => {
	return (
		<Layout pageName="Technology Enablement">
			<div className="white">
				{/* <h1>Technology Enablement</h1> */}
				<div className="multiParagraph">
					<h2>Enabling Employee Success</h2>
					<h3>Next Level Technology for Your Employees</h3>
					<p>Technology Enablement is about equipping businesses with current and cutting-edge technologies that improve employee engagement and process efficiencies. Technology should not be an inhibitor to business productivity if solutioned, implemented and communicated correctly. </p>
				<p> Ambient365 has been successful in guiding and transitioning its clients a technology transformation. Whether it be for a custom corporate intranet, content management solution with custom integrations to external business applications, or a collaboration space to digitize workflows and processes, Ambient365 has been successfully enabling companies to succeed.
{" "}
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

			<ModalProvider>
				<TechnologyModal />
			</ModalProvider>

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

export default technologyenablement;
