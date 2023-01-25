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
import { GatsbySeo } from 'gatsby-plugin-next-seo';

// import "../main.css";

// Modal
import ManagedModal from "./ManagedModal";
import { ModalProvider } from "react-modal-hook";

//Icons
import CoreEmpower from "../../images/CoreEmpower.png";
import servanthearted from "../../images/servanthearted.png";
import responsible from "../../images/responsible.png";
import committed from "../../images/committed.png";
import aspirational from "../../images/aspirational.png";

const managedservices = () => {
	return (
		<Layout pageName="Managed Services">
			<GatsbySeo
      openGraph={{
        type: 'website',
        url: 'https://www.ambient365.us/service/managedservices',
        title: 'Managed Services | Ambient365',
        description: 'Ambient365 offers managed services in cloud productivity and hosting, software development and operations (DevOps) as well as business intelligence and data analytics.',	
	}}
    />
			<div className="white">
				{/* <h1>Managed Services</h1> */}
				<div className="multiParagraph">
					<h2>Continuous Improvements As An Extension Of Your IT</h2>
					<p>
					Managed services is about leveraging outside expertise to eliminate the need for expensive in-house IT resources. Let the specialists handle your IT services and focus your efforts on areas that add value to your business. At Ambient365, we offer Managed Services in cloud productivity and hosting, software development and operations (DevOps) as well as business intelligence and data analytics.{" "}
				</p>
				<p>We are your first-tier support for M365</p>
				<li>We will provide your general M365 ad-hoc consulting services for business support as extended IT Services. This can be a monthly subscription service that allows high value to your IT team.</li>
				<li>Included in the monthly subscription is IT Helpdesk-related Activities catered to your business</li>
				</div>
				
			</div>
			<div className="darkText">
				<h4>How We Can Help</h4>
			</div>

			<ModalProvider>
				<ManagedModal />
			</ModalProvider>

<h1>AmbientCARES: <br /> <h2 className="lowerHeading"> Our Core Values Are the Heartbeat That Drives Our Culture And Our Engagements</h2></h1>
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
				<img src={CoreEmpower} alt="empowering" width={70} height={70}/> 
				<span className="caption">Empowering</span>
				</div>
				<div className="reacticon"> 
				<img src={servanthearted} alt="Servant-hearted" width={70} height={70}/> 
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

export default managedservices;
