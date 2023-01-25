import React from "react";
import Logo from "../images/ambient-logo-trans.png";
import "./mainbutton.css";
import { Link } from "gatsby";

//image
import AmbientStudiosLogoWhite from "../images/AmbientStudiosLogoWhite.png";
import Ambient365Logoblack from "../images/Ambient365Logo-black.png";

const footer = () => {
	return (
		<footer className="page-footer">
		<div className="columns container-center"> 
				

				<div>
					<h3>Get to Know Us</h3>
					<p> 
					<Link to="/about">
						Our Story 
					</Link></p>
					<p> 
					<Link to="/service">
					Our Services 
					</Link></p>
					<p> 
					<Link to="/team">
					Our Team 
					</Link>
					</p>

					<h3 className="secondHeading">Learn from Us</h3>
					<p> 
					<Link to="/event">
					Our Events
					</Link>
					</p>
					<p> 
					<Link to="/news">
					Our News
					</Link>
					</p>

					{/* <Link>
						<p> Our Insights </p>
					</Link> */}
				</div>
				<div>
					<h3> Contact Us </h3>
					<p>
						{" "}
						Address:
					</p>
					<p>
						{" "}
						135 S State College Blvd Suite 200
					</p>
					<p>
						{" "}
						Brea, CA 92821
					</p>
					<p> Email: <Link to="mailto:contact@ambient365.us">contact@ambient365.us</Link>  </p>
					<p> Tel: 714.987.6311 </p>
					<p>
					<Link to="/contact">
						{" "}
					 Contact 
					</Link>
					</p>
				</div>
			<div>
			<div className="footerlogo">
					<Link to="/">
						<img src={Ambient365Logoblack} alt="Ambient365" className="logo" />
					</Link>
				</div>
				<div className="footerlogo">
					<Link to="/">
						<img src={AmbientStudiosLogoWhite} alt="AmbientStudis" className="logo" />
					</Link>
				</div>
				
			</div>
			</div>
			<div className="fullWidth">
				<p>
					&copy; {new Date().getFullYear()}{" "}
					<Link to="https://www.ambientstudios.com/"><span>Ambient Studios LLC</span></Link> All rights
					reserved. <Link to="/privacy">Privacy Policy</Link>
			</p>
		</div>
		</footer>
	);
};

export default footer;
