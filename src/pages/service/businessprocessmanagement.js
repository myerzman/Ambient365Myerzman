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
// import { GatsbySeo } from 'gatsby-plugin-next-seo';

// import "../main.css";

// Modal
import BusinessModal from "./BusinessModal";
import { ModalProvider } from "react-modal-hook";

//Icons
import empowering from "../../images/empowering.png";
import servanthearted from "../../images/servanthearted.png";
import responsible from "../../images/responsible.png";
import committed from "../../images/committed.png";
import aspirational from "../../images/aspirational.png";

const businessprocessmanagement = () => {
	return (
		<Layout pageName="Business Process Management">  
		{/* <GatsbySeo
      openGraph={{
        type: 'website',
        url: 'https://www.example.com/page',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://www.example.ie/og-image-2.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt 2',
          },
        ],
      }}
    /> */}
			<div className="white">
				{/*<h1>Business Prodcess Management</h1>*/}
				<div className="multiParagraph">
					<h2>Critical Business Processes For Employee Engagement</h2>
					<p>
					Business process management (BPM) is a structured approach to improving the processes organizations use to get work done and generate business value. When properly executed, BPM has the ability to enhance efficiency and productivity, reduce costs, and minimize errors and risk – thereby optimizing the employee experience. Ambient365 looks at BMP as an opportunity of continuous improvement for employee engagement and efficiencies.
				</p>
				</div>
			</div>
			<div className="darkText">
				<h4>How We Can Help</h4>
			</div>

			<ModalProvider>
				<BusinessModal />
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

export default businessprocessmanagement;
