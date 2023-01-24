import React from "react";
import Layout from "../components/Layout";
import { GatsbySeo } from 'gatsby-plugin-next-seo';
//Icons
import CoreEmpower from "../images/CoreEmpower.png";
import servanthearted from "../images/servanthearted.png";
import responsible from "../images/responsible.png";
import committed from "../images/committed.png";
import aspirational from "../images/aspirational.png";


function about() {
	return (
		<Layout pageName="About">

		<GatsbySeo
		 openGraph={{
        type: 'website',
        url: 'https://www.ambient365.us/about',
      title: 'About Us | Ambient365',
      description:'Discover the depth of expertise at Ambient365, your trusted provider of Microsoft365 services for Southern California business. With over a decade of experience, our team offers tailored solutions for professional services, communications management, and more. Explore how our services can elevate your companys performance.',
		 }}
    />
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
		
		</Layout>
	);
}

export default about;
