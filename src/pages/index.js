import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Images from "../examples/images";
import { ModalProvider } from "react-modal-hook";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import Modal from "../components/Modal";
import { ScheduleButton } from "../components/schedulebutton";
import ServiceButton from "../components/servicebutton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

// import HomeCarousel from "./HomeCarousel";
import HomeLayout from "../components/HomeLayout";
import { hero7 } from "../images/hero7.jpg";
// images
import Intranet from "../images/intranet.png";

//Icons
import CoreEmpower from "../images/CoreEmpower.png";
import servanthearted from "../images/servanthearted.png";
import responsible from "../images/responsible.png";
import committed from "../images/committed.png";
import aspirational from "../images/aspirational.png";


const IndexPage = () => {
	return (
		<HomeLayout>
			<GatsbySeo
      openGraph={{
        type: 'website',
        url: 'https://www.ambient365.us/',
        title: 'Enterprise Cloud Solutions powered by the Microsoft Cloud | Ambient365',
        description: 'Elevate your business performance with our professional Microsoft365 services. With a decade of industry expertise, our team of experts offer tailored solutions for business process management, technology enablement, and more. Schedule a consultation to discuss your specific needs',
	  }}
    />
			<div className="left-aligned">
				{/* <h1>Next Gen Microsoft365 by Ambient 365!</h1>
				<h2> Inspire, Involve, Innovate & Iterate with Integrity </h2>
				<Link to="/contact">
					<ScheduleButton>Meet Our Consultants</ScheduleButton>
				</Link> */}
			</div>
			<div className="box" />
				<div className="events">
				<p>Ambient365 is our Microsoft Cloud Solutions Practice Area. Established in 2012, Ambient Studios is a technology professional services firm that was founded with the desire to nurture engagements that are client-focused, innovative, and honest.</p>
				<p>Focused on the customer journey, Ambient365 inspires the customer/employee experience while streamlining business processes, providing time to value. We leverage Microsoft Cloud Services to deliver innovative technology solutions, transformative workplace automations, and genuine client-focused managed services to drive business productivity and efficiency.</p>
				<p>At Ambient365, we understand the driving force of any business is its people. Our mentoring and best practices approach to people, process, and technology allows an organization to see their investment in a digital platform that helps organizations create a thriving culture within an employee experience platform. This version of the truth and system of record allows a centralized repository of good data and content that impacts profits and extends to employee engagement.</p>
			</div>
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
			<div className="box" />

			{/* <ModalProvider>
				<div>
					<h2>About Us</h2>
				<div className="events">
				<p>Ambient365 is a Microsoft Practice primary focus. Established in 2012, Ambient Studios is a Cloud Solutions Provider and technology professional services firm that was founded with the desire to nurture engagements that are client-focused, innovative, and honest.</p>
				<p>Focused on the customer journey, Ambient inspires the customer/employee experience while streamlining business processes, providing time to value. We deliver innovative technology solutions, transformative workplace automations, and genuine client-focused managed services to drive business productivity and efficiency.</p>
				<p>At Ambient365 we understand the driving force of any business is its people. Our mentoring and best practices approach to people, process, and technology allows an organization to see their investment in a digital platform that helps organizations create a thriving culture within an employee experience platform. This version of the truth and system of record allows a centralized repository of good data and content that impacts profits and extends to employee engagement.</p>
			</div>
					{/* <h2> Our Services </h2>
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
					</div> */}
				{/* </div>
				<hr />
				<div className="item-wrapper">
					<h2 className="lowerHeading">
						{" "}
						Meet Our Ambient Consultants!{" "}
					</h2>

					<br />
					<Link to="https://meetings.hubspot.com/drotolo">
						<ScheduleButton> Schedule a Meeting </ScheduleButton>
					</Link>
				</div> */}

				{/* <Images /> */}
			{/* </ModalProvider> */}
			<div className="item-wrapper">
				<hr />
			<h2 className="lowerHeading">
						{" "}
						Meet Our Ambient Consultants!{" "}
					</h2>

					<br />
					<Link to="/contact">
						<ScheduleButton> Schedule a Meeting </ScheduleButton>
					</Link>
					</div>
		</HomeLayout>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
