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
import ProfessionalModal from "./ProfessionalModal";
import { ModalProvider } from "react-modal-hook";

//Icons
import empowering from "../../images/empowering.png";
import servanthearted from "../../images/servanthearted.png";
import responsible from "../../images/responsible.png";
import committed from "../../images/committed.png";
import aspirational from "../../images/aspirational.png";

const professionalservices = () => {
	return (
		<Layout pageName="Professional Services">
			<div className="white">
				{/*<h1>Professional Services</h1>*/}
				<div className="multiParagraph">
					<h2>Agnostic Approach With Assessment-Led Solutions</h2>
					<p>Focused on the customer journey, Ambient365 inspires the customer/employee experience while streamlining business processes, providing time to value. We approach an agile methodology to professional services and become an extension of the clients'  business and IT services to offer mentoring and best practices. </p>
				</div>
			</div>
			<div className="darkText">
				<h4>How We Can Help</h4>
			</div>

			<ModalProvider>
				<ProfessionalModal />
			</ModalProvider>

			<h1>Ambient's core values for your enterprise needs</h1>
			<div className="icon-wrapper">
				<div className="reacticon">
					<img
						src={committed}
						alt="Committed"
						width={70}
						height={70}
					/>
					<span className="caption">Committed</span>
				</div>
				<div className="reacticon">
					<img
						src={aspirational}
						alt="Aspirational"
						width={70}
						height={70}
					/>
					<span className="caption">Aspirational</span>
				</div>
				<div className="reacticon">
					<img
						src={responsible}
						alt="Responsible"
						width={70}
						height={70}
					/>
					<span className="caption">Responsible</span>
				</div>
				<div className="reacticon">
					<img
						src={empowering}
						alt="empowering"
						width={70}
						height={70}
					/>
					<span className="caption">empowering</span>
				</div>
				<div className="reacticon">
					<img
						src={servanthearted}
						alt="Servant-hearted"
						width={70}
						height={70}
					/>
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

export default professionalservices;
