import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
// import { useModal } from "react-modal-hook";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainButton from "../../components/mainbutton";

// images
import Intranet from "../../images/intranet.png";
import Logo from "../../images/ambient-logo-trans.png";
import modernintranet from "../../images/modernintranet.png";
import memployeeexperience from "../../images/Employee_Experience.png";
import Collab from "../../images/Portal&Collaboration.png";
import frontline from "../../images/Mobilitytoworkers.png";
import Close from "../../images/close.png";
import CMEmployeeExperience from "../../images/CMEmployeeExperience.png";
import CMPortal from "../../images/CMPortal.png";
import CMMobility from "../../images/CMMobility.png";
import CMIntranet from "../../images/CMIntranet.png";
//styles
import "../../components/Modal.css";

export default function CommunicationsModal() {
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
			{" "}
			<div className="tile-wrapper">
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={0}
					description="Allowing Time To Value"
					image={CMIntranet}
				>
					Modern Intranet
				</MainButton>
				<MainButton
					setItem={setSelectedItem}
					itemNumber={1}
					description="Creating A Thriving Culture"
					image={CMEmployeeExperience}
				>
					Employee Experience
				</MainButton>
				<MainButton
					setItem={setSelectedItem}
					itemNumber={2}
					description="Reducing Redundancy"
					image={CMPortal}
				>
					Portals & Collaboration
				</MainButton>
				<MainButton
					setItem={setSelectedItem}
					itemNumber={3}
					description="Reaching Front Line Workers"
					image={CMMobility}
				>
					Mobility to workers
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
					<img src={Close} alt="closeButton" />
				</button>
				{/* <h3>Key Offerings</h3> */}

				<Carousel selectedItem={selectedItem} infiniteLoop={true}>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={Intranet} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Modern Intranet</h4>
								<h5> Allowing Time To Value </h5>
								<p>
									A modern intranet is designed with the
									employee experience in mind making it easy
									for employees to find what they're looking
									for. Characteristics to a modern intranet
									include a purpose-built platform that
									greatly reduces the risk of the intranet
									failing and can be accessed by employees
									instantly after launch. Little training is
									required with a modern intranet making it
									easy for employees to update and scale over
									time. Due to the modern intranet being
									purpose built, this means that the Internet
									can instantly serve the employees and
									provide time to value.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={memployeeexperience} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Employee Experience</h4>
								<h5> Creating A Thriving Culture </h5>
								<p>
									During the customer journey to
									modernization, understanding current work
									experiences is key. Getting to the people
									you work with and the places you work is
									central to employee satisfaction. At
									Ambient365, our goal is to listen and
									understand your company culture. To provide
									efficient solutions and recommendations that
									resonate with employee engagement, promoting
									adoption of technology and solutions, that
									ultimately help with employee retention and
									profitability.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={Collab} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Portals & Collaboration</h4>
								<h5>Reducing Redundancy</h5>
								<p>
									Quickly and easily get to the people you
									work with and the places that you work.
									Allow self-help portals to eliminate
									redundant requests as self-service. Solution
									portals provide access to line of business
									(LOB) systems, critical business processes,
									and collaborative business environments.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={frontline} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Mobility to workers</h4>
								<h5>Reaching Front Line Workers</h5>
								<p>
									Securely connect to a mobile device to
									receive internal communications and
									participate in an inclusive employee
									collaborative environment. Our mobile
									strategy will connect with the company
									digital platform, so employees stay
									connected to critical information while in
									the warehouse, manufacturing plant, or out
									and about in remote routines.
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</ReactModal>
		</>
	);
}
