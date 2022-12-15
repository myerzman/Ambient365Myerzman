import React from "react";

import "./serviceButton.css";

export default function serviceButton(props) {
	console.log("props!", props);
	return (
		<div className="serviceButton">
			{props.children}
			{/* <p>{props.description && props.description}</p> */}
		</div>
	);
}
