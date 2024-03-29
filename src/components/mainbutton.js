import React from "react";

import "./mainbutton.css";

import Logo from "../images/ambient-logo-trans.png";
//https://frontendresource.com/css-product-cards/
// nike shoes

export default function mainbutton(props) {
	console.log("props!", props);
	return (
		<div
			className="mainButton card"
			onClick={() => props.setItem(props.itemNumber)}
		>
			<div className="imgBx">
				<img src={props.image ? props.image : Logo} alt="Ambient365" />
			</div>

			<div className="contentBx">
				<h3>{props.children}</h3>
				<p>{props.description && props.description}</p>
			</div>
		</div>
	);
}
