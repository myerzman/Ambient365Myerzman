import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
// import { useModal } from "react-modal-hook";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainButton from "../../components/mainbutton";

import Close from "../../images/close.png";

// images
import Intranet from "../../images/intranet.png";
import MAnalysis from "../../images/MAnalysis.png";
import MDesign from "../../images/MDesign.png";
import MMentoring from "../../images/MMentoring.png";
import ProjectManagement from "../../images/project management.png";
import MAssessment from "../../images/MAssessment.png";
import PSAssessment from "../../images/PSAssessment.png";
import PSAnalysis from "../../images/PSAnalysis.png";
import PSDesign from "../../images/PSDesign.png";
import PSProjectManagement from "../../images/PSProjectManagement.png";
import PSMentoring from "../../images/PSMentoring.png";

//styles
import "../../components/Modal.css";

export default function ProfessionalModal() {
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
					description="Agnostic Approach Recommendations"
					image={PSAssessment}
				>
					Assessment-Led Solutions
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={1}
					description="Allowing For Continuous Improvements"
					image={PSAnalysis}
				>
					Analysis
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={2}
					description="Promoting Scalability & Structure"
					image={PSDesign}
				>
					Design & Architecture
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={3}
					description="Education & Best Practices"
					image={PSMentoring}
				>
					Mentoring Workshops
				</MainButton>
				<MainButton
					// onClick={() => setSelectedItem(0)}
					setItem={setSelectedItem}
					itemNumber={4}
					description="Nurturing Customer Experience"
					image={PSProjectManagement}
				>
					Project Management
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
								<img src={MAssessment} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Assessment-Led Solutions</h4>
								<h5>Agnostic Approach Recommendations</h5>
								<p>
									Following market trends by Gartner, Inc, and
									Forrester Research, Ambient365 believes in
									the importance of an agnostic approach to
									any project. Here, we follow best practices
									with an assessment-led approach to any
									solution. Understanding the current state,
									gaps, business challenges, and the
									compelling need of a customer, allows
									Ambient365 to partner and provide the best
									future state recommendation.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={MAnalysis} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Analysis: People/Process/Technology</h4>
								<h5>Allowing For Continuous Improvements</h5>
								<p>
									Using leading analytics and a methodology
									that understands the compelling need from
									the customer, Ambient365 focuses on The
									Why?, The How?, The What?, and The Business
									Value. We do this by listening to the
									customer’s purpose and alignment, the type
									of culture and communications that are
									needed, the customer roadmap and future
									state needs, and wellbeing from the employee
									engagement required to deliver a return on
									investment through people, process, and
									technology.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={MDesign} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Design & Architecture</h4>
								<h5>Promoting Scalability & Structure</h5>
								<p>
									Align the entire organization around your
									brand, vision, mission, and strategic
									priorities. Information architecture (IA)
									focuses on organizing, structuring, and
									labeling content in an effective and
									sustainable way. The goal is to help users
									find information and complete tasks. There
									are four main components: organization
									systems, labeling systems, navigation
									systems and searching systems. This is a key
									foundation of any modernization project and
									readiness, helping tie together different
									services into a single experience.{" "}
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={MMentoring} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Mentoring Workshop</h4>
								<h5>Education & Best Practices</h5>
								<p>
									Ambient365 has a variety of workshops that
									provide a thought process behind the
									upcoming culture change to modernization. We
									are flexible to schedule workshops and
									provide information ahead of any meeting,
									this way team members are aware and prepared
									for the meeting agenda. Our workshops come
									in a variety of agendas that are catered to
									your specific project and business needs. By
									asking the tough questions and provoking a
									thought process, Ambient365 can provide a
									deliverable that focuses on your
									requirements and relates to your compelling
									business need. More importantly, we help the
									customer realize their journey.{" "}
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="col-wrapper">
							<div className="col">
								<img src={ProjectManagement} alt="Intranet" />{" "}
							</div>
							<div className="col">
								<h4>Project Management</h4>
								<h5>Nurturing Customer Experience</h5>
								<p>
									At Ambient365 we provide an Agile Project
									Management methodology. We understand that
									customers and schedules are time sensitive,
									and we are conscious of staying under budget
									with any project. Our project management
									goals are to keep everyone aware of next
									steps, keep next steps moving forward and on
									time, and to be the liaison between the
									complexity of ongoing communications.
									Providing expert business process analysis
									and definition are the key to delivering
									technical solutions that work for your
									business. Agile Project Management and
									methodical organizational change management
									are the focal point for implementation and
									organizational change success.
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</ReactModal>
		</>
	);
}
