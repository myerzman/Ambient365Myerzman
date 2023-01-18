import React from "react";
import { useState } from "react";
import { Link } from "gatsby";

import "./Navbar.css";

// images
import ambient365 from "../images/ambient365.png";
import Menu from "../images/menu.png";

const Navbar = () => {
	const [show, setShow] = useState(false);
	return (
		<div className="nav">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						{" "}
						<img src={ambient365} alt="ambient365" />{" "}
					</Link>
					<button className="nav-btn" onClick={() => setShow(!show)}>
						<img src={Menu} alt="menuButton" />
					</button>
				</div>
				<div className={show ? "nav-links show-links" : "nav-links"}>
					<Link
						to="/"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						home
					</Link>
					<Link
						to="/service"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						Service
					</Link>
					<Link
						to="/team"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						Our Team
					</Link>
					<Link
						to="/event"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						Our Events
					</Link>
					<Link
						to="/news"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						News
					</Link>
				</div>
				<div className="contact-link">
					<Link to="/contact" onClick={() => setShow(false)}>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
