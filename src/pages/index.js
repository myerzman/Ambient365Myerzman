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

// import HomeCarousel from "./HomeCarousel";
import HomeLayout from "../components/HomeLayout";
import { hero7 } from "../images/hero7.jpg";
// images
import Intranet from "../images/intranet.png";

const IndexPage = () => {
	return (
		<HomeLayout>
			<div className="left-aligned">
				{/* <h1>Next Gen Microsoft365 by Ambient 365!</h1>
				<h2> Inspire, Involve, Innovate & Iterate with Integrity </h2>
				<Link to="/contact">
					<ScheduleButton>Meet Our Consultants</ScheduleButton>
				</Link> */}
			</div>

			<div className="box" />

			<ModalProvider>
				<div>
					<h2> Our Services </h2>
					<div className="item-wrapper tiles serviceTiles alt">
						<Link to="/service/communicationsmanagement">
							<ServiceButton>
								<h3>Communications Management</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</ServiceButton>
						</Link>
						<Link to="/service/technologyenablement">
							<ServiceButton>
								<h3>Technology Enablement</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</ServiceButton>
						</Link>
						<Link to="/service/professionalservices">
							<ServiceButton>
								<h3>Professional Services</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</ServiceButton>
						</Link>
						<Link to="/service/businessprocessmanagement">
							<ServiceButton>
								<h3> Business Process Management </h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</ServiceButton>
						</Link>
						<Link to="/service/managedservices">
							<ServiceButton>
								<h3> Managed Services</h3>{" "}
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</ServiceButton>
						</Link>
					</div>
				</div>
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
				</div>

				{/* <Images /> */}
			</ModalProvider>
		</HomeLayout>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
