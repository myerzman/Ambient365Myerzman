import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import HomeCarousel from "../pages/HomeCarousel";

// Images

// import Swoosh from "../images"

// Styles
// import "normalize.css";
import "../assets/css/main.css";
import "./layout.css";
import { Carousel } from "react-bootstrap";
const Layout = ({ children, pageName }) => {
	console.log("pageName", pageName);
	return (
		<>
			<Navbar />

			<div className="content-container" id="home-container">
				<div id="content-wrap">
					<div className="background-image home-background-image">
						<h1 className="header">{pageName}</h1>
					</div>
					<HomeCarousel />

					<div className="container-center">{children}</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
