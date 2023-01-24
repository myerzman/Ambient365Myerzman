import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
// import { useModal } from "react-modal-hook";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainButton from "../../components/mainbutton";

import Close from "../../images/close.png";

// images
import microsoft from "../../images/microsoft.png";
import MGovernance from "../../images/MGovernance.png";
import contentmanagement from "../../images/content management.png";
import M365 from "../../images/M365.png";
import LOB from "../../images/LOB.png";
import searchStrategy from "../../images/Search_Strategy.png";
import governance from "../../images/governance.png";
import Intranet from "../../images/intranet.png";
import TEGovernance from "../../images/TEGovernance.png";
import TELOB from "../../images/TELOB.png";
import TESearch from "../../images/TESearch.png";
import TEContent from "../../images/TEContent.png";

//styles
import "../../components/Modal.css";

export default function TechnologyModal() {
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
					description="Allow Scalability & Growth"
					image={microsoft}
				>
					M365 Readiness
				</MainButton>
				<MainButton
					setItem={setSelectedItem}
					itemNumber={1}
					description="Central Version Of Truth"
					image={TEContent}
				>
					Content Management & Migrations
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={2}
					description="Connect The Places You Work"
					image={TELOB}
				>
					LOB Application Integration
				</MainButton>
				<MainButton
					setItem={setSelectedItem}
					itemNumber={3}
					description="Modern Search Experience"
					image={TESearch}
				>
					Search Strategy
				</MainButton>
				<MainButton
					setItem={setSelectedItem}
					itemNumber={4}
					description="Policy Based Rules"
					image={TEGovernance}
				>
					Governance
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
					<img src={Close} alt="CloseButton" />
				</button>
				{/* <h3>Key Offerings</h3> */}

				<Carousel selectedItem={selectedItem} infiniteLoop={true}>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={M365} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4> M365 Readiness</h4>
								<h5>Allow Scalability & Growth</h5>
								<p>
									At Ambient365, we promote customer success
									through awareness of mentoring and best
									practices. Technology and platform readiness
									is crucial to allow the employee experience
									to thrive. This means a Health Check of
									performance, securities, permissions, are
									all ready for the upcoming platform
									scalability.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={contentmanagement} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Content Management & Migrations</h4>
								<h5>Central Version Of Truth</h5>
								<p>
									A go-forward approach to a new solution
									provides time to value. Active content
									migration is a must to allow instant
									employee engagement. We believe that a true
									system of record should integrate all
									aspects of the lifecycle of the record,
									while remaining in a centralized repository,
									this way we have one version of the truth.
									Legacy migrations are an opportunity to
									understand improvements to Governance, and
									priority to lifecycle management of the
									content.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={LOB} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>LOB Application Integration</h4>
								<h5>Connect The Places You Work</h5>
								<p>
									At Ambient365, we are flexible and creative
									to our approach to custom integrations.
									Based on the business drivers and
									requirements, we listen to the user
									experience and focus on the compelling need.
									We have experience with pure play and
									alternative approaches to ensure alignment
									to the business problem.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={searchStrategy} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Search Strategy</h4>
								<h5> Modern Search Experience </h5>
								<p>
									Having a search strategy is a priority for
									enterprise content management. We do this by
									understanding Taxonomy in how a company
									classifies its content. A relational
									database allows scalability while improving
									the employee experience. Quick access, with
									minimal steps and clicks, in retrieving
									relevant content naturally improves the flow
									of everyday work.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={MGovernance} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Governance</h4>
								<h5> Policy Based Rules</h5>
								<p>
									At Ambient365, we believe an understanding
									for Governance is the heart and soul of
									digital transformation. Creating a mobile
									strategy to allow centralized communication
									and collaboration, to enable your employees
									to work remotely, and more efficiently, will
									drive the employee experience culture. We
									will help promote Governance through a
									series of workshops that meet your business
									needs and focus on a modernization journey.
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</ReactModal>
		</>
	);
}
