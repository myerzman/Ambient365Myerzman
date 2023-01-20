import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
// import { useModal } from "react-modal-hook";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainButton from "../../components/mainbutton";

// images
import Intranet from "../../images/intranet.png";
import Logo from "../../images/ambient-logo-trans.png";
import MSAnalytics from "../../images/MSAnalytics.png";
import MSHealth from "../../images/MSHealth.png";
import MSSDLC from "../../images/MSSDLC.png";
import MSCloud from "../../images/MSCloud.png";
import centerofexcellence from "../../images/centerofexcellence.png";

//styles
import "../../components/Modal.css";
import managedservices from "./managedservices";
import { MusicAlbumProductionType } from "schema-dts";

export default function ManagedModal() {
	// const [modalState, setModalState] = useState("test");
	const [selectedItem, setSelectedItem] = useState(null);
	const [showModal, setShowModal] = useState(false);
	// const handleClick = (data) => {
	// 	setModalState(data);
	// 	// showModal(true);
	// 	ReactModal.setAppElement("body");
	// 	console.log("data", data);
	// };

	useEffect(() => {
		ReactModal.setAppElement("body");
	}, []);

	useEffect(() => {
		console.log("running selected Item ", selectedItem);
		(selectedItem && setShowModal(true)) ||
			(selectedItem === 0 && setShowModal(true));
	}, [selectedItem]);

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedItem(null);
	};

	return (
		<>
			<div className="tile-wrapper">
				{" "}
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={0}
					description="Check In’s For Optimization Opportunities"
					image={MSHealth}
				>
					Health Check Services & Support
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={1}
					description="Informed Business Decisions"
					image={MSAnalytics}
				>
					Analytics & Business Intelligence
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={2}
					description="Boosting Productivity"
					image={MSCloud}
				>
					Cloud Productivity & Hosting
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={3}
					description="Delivering Time To Value"
					image={MSSDLC}
					>
					SDLC & DevOps
				</MainButton>
			</div>

			<ReactModal
				isOpen={showModal}
				onRequestClose={handleCloseModal}
				shouldCloseOnOverlayClick={true}
			>
				<button
					className="closeButton"
					onClick={() => setShowModal(false)}
				>
					X
				</button>
				<h3>Key Offerings</h3>
				<Carousel selectedItem={selectedItem} infiniteLoop={true}>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={Intranet} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Health Check Services & Support</h4>
								<h5>Check In’s For Optimization Opportunities</h5>
								<p>
									An IT health check is a complete, independent assessment of your business's cyber security. The goal is to test how well protected your systems are and how vulnerable they might be to someone trying to get, whether inadvertently or with serious intent. We can help by regular, check-ins, to ensure your environment is performing well and recommend optimization opportunities.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={Intranet} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Analytics & Business Intelligence</h4>
								<h5>Informed Business Decisions</h5>
								<p>
									All organizations are under increased pressure to get the most out of their mountains of data and make more informed business decisions. Many emerging trends require companies to evaluate their data processes and become more data driven. Ambient365 can help to turn raw data into actionable information.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={Intranet} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Cloud Productivity & Hosting</h4>
								<h5>Boosting Productivity</h5>
								<p>
									The cloud boosts productivity. Ambient365 can help to recommend the best choices so your programs will also be more reliable and kept up-to-date at all times. Data and analytics can be shared across the entire organization in real-time to aid decision-making, reduce duplicated efforts, and minimize errors.{" "}
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={Intranet} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>SDLC & DevOps</h4>
								<h5>Delivering Time To Value</h5>
								<p>
									The DevOps methodology is a relative newcomer to the SDLC scene. It emerged from two trends: the application of Agile and Lean practices to operations work, and the general shift in business toward seeing the value of collaboration between development and operations staff at all stages of the SDLC process. We break DevOps into five main areas: Automation, Cloud-Native, Culture, Security, and Observability. Ambient365 has extensive experience to customize apps and creativity to deliver time to value.{" "}
								</p>
							</div>
						</div>
					</div>
					
				</Carousel>
			</ReactModal>
		</>
	);
}
