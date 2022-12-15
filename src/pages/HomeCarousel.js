import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
// import { useModal } from "react-modal-hook";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, autoPlay } from "react-responsive-carousel";
import MainButton from "../components/mainbutton";
import { graphql, Link } from "gatsby";

// images
import Intranet from "../images/intranet.png";
import Hero2 from "../images/hero2.jpg";
import Hero8 from "../images/hero8.jpg";

//styles
import "../components/Modal.css";
import ScheduleButton from "../components/schedulebutton";

export default function HomeCarousel() {
	return (
		<>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				centerMode={false}
				// renderThumbs={false}
				showArrows={false}
				showStatus={false}
				showThumbs={false}
				interval={4000}
			>
				<div>
					<div className="slider-content">
						<h1>Welcome to Ambient 365</h1>
						<p>
							Microsoft Power Platform is a line of business
							intelligence, app development, and app connectivity
							software applications. Microsoft Power Platform
							benefits for your organization include all
							Enterprise Business Processes in a Single Platform.
							Self-Service for easy adoption and use, streamlines
							processes and improves productivity, facilitates
							remote work and Collaboration.
						</p>
					</div>
					<div className="darkness"></div>
					<img src={Hero2} alt="OurStory" />
				</div>
				<div>
					<div className="slider-content">
						<h1>Power Platform</h1>
						<p>
							Microsoft Power Platform is a line of business
							intelligence, app development, and app connectivity
							software applications. Microsoft Power Platform
							benefits for your organization include all
							Enterprise Business Processes in a Single Platform.
							Self-Service for easy adoption and use, streamlines
							processes and improves productivity, facilitates
							remote work and Collaboration.
						</p>
					</div>
					<div className="darkness"></div>
					<img src={Hero8} alt="OurService" />
				</div>
				{/* <div>
					<img src={Intranet} alt="Intranet" />{" "}
				</div> */}
			</Carousel>
		</>
	);
}
