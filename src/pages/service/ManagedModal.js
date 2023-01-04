import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
// import { useModal } from "react-modal-hook";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainButton from "../../components/mainbutton";

// images
import Intranet from "../../images/intranet.png";
import Logo from "../../images/ambient-logo-trans.png";
import lifecycle from "../../images/lifecycle.png";
import criticalbusinessprocess from "../../images/criticalbusinessprocess.png";
import customapplication from "../../images/customapplication.png";
import powerplatform from "../../images/powerplatform.png";
import centerofexcellence from "../../images/centerofexcellence.png";

//styles
import "../../components/Modal.css";
import managedservices from "./managedservices";

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
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={0}
					description="Check In’s For Optimization Opportunities"
					image={powerplatform}
				>
					Health Check Services & Support
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={1}
					description="Informed Business Decisions"
					image={centerofexcellence}
				>
					Analytics & Business Intelligence
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={2}
					description="Boosting Productivity"
					image={lifecycle}
				>
					Cloud Productivity & Hosting
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={3}
					description="Delivering Time To Value"
					image={criticalbusinessprocess}
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
								<p>
									Check In’s For Optimization Opportunities
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
								<p>
									Informed Business Decisions
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
								<p>
									Boosting Productivity
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
								<p>
									Delivering Time To Value
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</ReactModal>
		</>
	);
}
