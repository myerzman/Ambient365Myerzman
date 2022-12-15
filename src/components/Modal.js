import React from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// images
import Intranet from "../images/intranet.png";

//styles
import "./Modal.css";

export default function Modal() {
	const [showModal, hideModal] = useModal(() => (
		<ReactModal isOpen>
			{/* <h3>Key Offerings</h3> */}

			<Carousel>
				<div>
					<div className="col-wrapper">
						<div className="col">
							<img src={Intranet} alt="Intranet" />{" "}
						</div>
						<div className="col">
							<h4>Modern Intranet</h4>
							<p>
								A modern intranet is designed with the employee
								experience in mind making it easy for employees
								to find what they're looking for.
							</p>
							<p>
								Characteristics to a modern intranet include a
								purpose-built platform that greatly reduces the
								risk of the intranet failing and can be accessed
								by employees instantly after launch.
							</p>
							<p>
								Little training is required with a modern
								intranet making it easy for employees to update
								and scale over time. Due to the modern intranet
								being purpose built, this means that the
								Internet can instantly serve the employees and
								provide time to value.
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
							<h4>Portals & Collaboration</h4>
							<p>
								Quickly and easily get to the people you work
								with and the places that you work.{" "}
							</p>
							<p>
								Allow self-help portals to eliminate redundant
								requests as self-service. Solution portals
								provide access to line of business (LOB)
								systems, critical business processes, and
								collaborative business environments.
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
							<h4>Mobility to workers</h4>
							<p>
								Securely connect to a mobile device to receive
								internal communications and participate in an
								inclusive employee collaborative environment.
							</p>
							<p>
								Our mobile strategy will connect with the
								company digital platform, so employees stay
								connected to critical information while in the
								warehouse, manufacturing plant, or out and about
								in remote routines.
							</p>
							<p>Read More...</p>
						</div>
					</div>
				</div>
			</Carousel>

			<button onClick={hideModal}>Close Offerings</button>
		</ReactModal>
	));

	return <button onClick={showModal}>Show Key Offerings</button>;
}
