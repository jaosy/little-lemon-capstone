import React from "react";
import Nav from "./Nav";
import logo from "../assets/Logo.svg";

export default function Header() {
	return (
		<React.Fragment>
			<div className="header">
				<img alt="Little Lemon" src={logo}></img>
				<Nav></Nav>
			</div>
		</React.Fragment>
	);
}
