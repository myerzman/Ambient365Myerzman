import React from "react";
import footer from "../../components/footer";
import Layout from "../../components/Layout";
import MainButton from "../../components/mainbutton";
import { Link } from "gatsby";
import ScheduleButton from "../../components/schedulebutton";
import HubspotForm from "react-hubspot-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

// import "../main.css";

// modals
import CommunicationsModal from "./CommunicationsModal";
import { ModalProvider } from "react-modal-hook";

//Icons
import CoreEmpower from "../../images/CoreEmpower.png";
import servanthearted from "../../images/servanthearted.png";
import responsible from "../../images/responsible.png";
import committed from "../../images/committed.png";
import aspirational from "../../images/aspirational.png";

const communicationsmanagement = () => {
	return (
		<Layout pageName="Communications Management">
			<GatsbySeo
      openGraph={{
        type: 'website',
        url: 'https://www.ambient365.us/service/communicationsmanagement',
        title: 'Communications Management | Our Services | Ambient365',
        description: 'Ambient365 empowers organization and its people, process, and technology to see their investment in a digital platform & help organization to create a thriving culture within an employee experience platform.',	
	}}
    />

			<div className="white">
				{/* <h1>Communications Management</h1>*/}
				<div className="multiParagraph">
					<h2>M365 Employee Experience Platform</h2>
					<p>
						At Ambient365 we understand the driving force of any
						business is its people. Our mentoring and best practices
						approach to people, process, and technology allows an
						organization to see their investment in a digital
						platform that helps organizations create a thriving
						culture within an employee experience platform.{" "}
					</p>
				</div>
			</div>
			<div className="darkText">
				<h4>How We Can Help</h4>
			</div>

			<ModalProvider>
				<CommunicationsModal />
			</ModalProvider>


<h1>AmbientCARES: <br /> <h2 className="lowerHeading"> Our Core Values Are the Heartbeat That Drives Our Culture And Our Engagements</h2></h1>

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
						src={CoreEmpower}
						alt="empowering"
						width={70}
						height={70}
					/>
					<span className="caption">Empowering</span>
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

export default communicationsmanagement;
