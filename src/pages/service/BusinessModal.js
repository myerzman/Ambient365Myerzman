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
import businessprocessmanagement from "./businessprocessmanagement";

export default function BusinessModal() {
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
					description="We develop your website! Contact us for a quote."
					image={powerplatform}
				>
					Power Platform
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={1}
					description="We develop your website! Contact us for a quote."
					image={centerofexcellence}
				>
					Center of Excellence
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={2}
					description="We develop your website! Contact us for a quote."
					image={lifecycle}
				>
					Lifecycle Management
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={3}
					description="We develop your website! Contact us for a quote."
					image={criticalbusinessprocess}
					>
					Critical Business Processes
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={4}
					description="We develop your website! Contact us for a quote."
					image={customapplication}
				>
					Custom Applications
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
								<h4>Power Platform</h4>
								<p>
									Microsoft Power Platform is a line of
									business intelligence, app development, and
									app connectivity software applications.
									Microsoft Power Platform benefits for your
									organization include all Enterprise Business
									Processes in a Single Platform. Self-Service
									for easy adoption and use, streamlines
									processes and improves productivity,
									facilitates remote work and Collaboration.
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
								<h4>Center of Excellence</h4>
								<p>
									Establishing a Microsoft Power Platform
									Center of Excellence (CoE) means investing
									in and nurturing organic growth while
									maintaining governance and control. A CoE is
									designed to drive innovation and
									improvement, and as a central function it
									can break down geographic and organizational
									silos.
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
								<h4>Lifecycle Management</h4>
								<p>
									Every record has a lifecycle. At Ambient365,
									we ask the questions of where does this
									record come from, how is it created? What is
									the data that is input in this record, and
									where does the data go? Where does this
									record live? What does this record connect
									to? What is the process of this record, and
									where does it get sent? What is the business
									value of this record? Who does this record
									belong to? What is the policy or record
									management? Where does this record get
									archived? In other words, we listen to you
									and provide added value and best practice
									recommendations to your digital
									transformation journey.
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
								<h4>Critical Business Processes</h4>
								<p>
									At Ambient365, we automate manual processes
									to modernize the employee experience from
									process-centric workflow models to
									real-world interactions with reporting
									dashboards for analytics. There are some
									processes in an organization that literally
									mean revenue. We take an Assessment-Led
									approach to proving recommendations that
									easily re-assign and load balance work in
									the event of personnel changes,
									understanding time is money. We help
									optimize these processes to save money,
									realize return on investment, increase
									productivity, and allow for continuous
									improvements.
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
								<h4>Custom Applications</h4>
								<p>
									Custom application development is the
									process of designing, creating and deploying
									tailor-made software applications for the
									business. At Ambient365, we deliver
									end-to-end web design and development
									engagements specializing on custom
									development of web applications, including
									the modern Intranet.
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</ReactModal>
		</>
	);
}
