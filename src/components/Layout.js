import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

// Images

// import Swoosh from "../images"

// Styles
// import "normalize.css";
import "../assets/css/main.css";
import "./layout.css";
const Layout = ({ children, pageName }) => {
	console.log("pageName", pageName);
	return (
		<>
			<Navbar />

			<div className="content-container" id="page-container">
				<div id="content-wrap">
					<div className="hero-image"></div>
					<div className="background-image">
						<h1 className="header">{pageName}</h1>
					</div>
					<div className="container-center">{children}</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
