import React from "react";
import Nav from "./Nav";
import logo from "../assets/Logo.svg";

export default function Header() {
	return (
		<React.Fragment>
			<header className="header">
				<img alt="Little Lemon" src={logo}></img>
				<Nav></Nav>
			</header>
		</React.Fragment>
	);
}
