import React from "react";
import Layout from "../components/Layout";
import HubspotForm from "react-hubspot-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";



const contact = () => {
	return (
		<Layout pageName="Contact Us">
			<main className="Page">
				<section className="contact-page">
					<div className="white">
						<div className="multiParagraph">
							<article className="contact-info">
						<h2>
							{" "}
							Get in Touch with Your Communication Guru Today!{" "}
						</h2>
						<p>Or you can also give us a call at 714.987.6311</p>
							</article>
						</div>
					</div>
					<article>
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
					</article>
				</section>
			</main>
		</Layout>
	);
};

export default contact;
