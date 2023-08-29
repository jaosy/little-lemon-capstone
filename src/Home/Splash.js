import React from "react";
import splash from "../assets/splash pic.png";
import { Link } from "react-router-dom";

export default function Splash() {
	return (
		<section className="splash-section" role="splash-content-container">
			<div className="splash-text-info" role="splash-text-container">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					Mediterranean restaurant serving fresh ingredients with a friendly
					smile.
				</p>
				<p>Order online, browse our menu or reserve a table now.</p>
				<Link className="link-button" to="/reservations">
					Reserve a table
				</Link>
			</div>
			<img alt="Little Lemon restaurant food" src={splash}></img>
		</section>
	);
}
