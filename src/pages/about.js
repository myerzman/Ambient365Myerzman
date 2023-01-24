import React from "react";
import Layout from "../components/Layout";
import { GatsbySeo } from 'gatsby-plugin-next-seo';
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
				<p>Ambient365 is a Microsoft Practice primary focus. Established in 2012, Ambient Studios is a Cloud Solutions Provider and technology professional services firm that was founded with the desire to nurture engagements that are client-focused, innovative, and honest.</p>
				<p>Focused on the customer journey, Ambient inspires the customer/employee experience while streamlining business processes, providing time to value. We deliver innovative technology solutions, transformative workplace automations, and genuine client-focused managed services to drive business productivity and efficiency.</p>
				<p>At Ambient365 we understand the driving force of any business is its people. Our mentoring and best practices approach to people, process, and technology allows an organization to see their investment in a digital platform that helps organizations create a thriving culture within an employee experience platform. This version of the truth and system of record allows a centralized repository of good data and content that impacts profits and extends to employee engagement.</p>
			</div>
		</Layout>
	);
}

export default about;
