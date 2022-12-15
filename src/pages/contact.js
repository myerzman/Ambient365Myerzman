import React from "react";
import Layout from "../components/Layout";

const contact = () => {
	return (
		<Layout pageName="Contact Us">
			<main className="Page">
				<section className="contact-page">
					<article className="contact-info">
						<h3>
							{" "}
							Get in Touch with Your Communication Guru Today!{" "}
						</h3>
					</article>
					<article>
						<form className="form contact-form">
							<div className="form-row">
								<label htmlFor=""> Full Name </label>
								<input type="text" name="name" id="name" />
							</div>
							<div className="form-row">
								<label htmlFor=""> Company Name </label>
								<input
									type="text"
									name="company"
									id="company"
								/>
							</div>
							<div className="form-row">
								<label htmlFor=""> Company Email </label>
								<input type="text" name="email" id="email" />
							</div>
							<button type="submit" className="btn block">
								{" "}
								Submit{" "}
							</button>
						</form>
					</article>
				</section>
			</main>
		</Layout>
	);
};

export default contact;
