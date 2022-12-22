import React from "react";
import Logo from "../images/ambient-logo-trans.png";
import "./mainbutton.css";
import { Link } from "gatsby";

const footer = () => {
	return (
		<footer className="page-footer">
			<div className="columns">
				<div>
					<img src={Logo} alt="Ambient365" className="logo" />
					<Link to="/privacy">Privacy Policy</Link>
				</div>

				<div>
					<h3>Get to Know Us</h3>

					<Link to="/about">
						<p> Our Story </p>
					</Link>
					<Link to="/service">
						<p> Our Services </p>
					</Link>
					<Link to="/team">
						<p> Our Team </p>
					</Link>

					<h3 className="secondHeading">Learn from Us</h3>

					<Link to="/event">
						<p> Our Events</p>
					</Link>

					{/* <Link>
						<p> Our Insights </p>
					</Link> */}
				</div>
				<div>
					<h3> Contact Us </h3>
					<p>
						{" "}
						Address: 135 S State College Blvd, Suite 200 Brea, CA
						92821
					</p>
					<p> Email: info@ambientstudios.com </p>
					<p> Tel: 714.987.6311 </p>
					<Link to="/contact">
						{" "}
						<p> Contact </p>
					</Link>
				</div>
			</div>
			<div className="fullWidth">
				<p>
					&copy; {new Date().getFullYear()}{" "}
					<span className="red"> Ambient365 </span> All rights
					reserved
				</p>
			</div>
		</footer>
	);
};

export default footer;
