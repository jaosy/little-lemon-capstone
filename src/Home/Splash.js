import React from "react";
import splash from "../assets/splash pic.png";
import { Link } from "react-router-dom";

export default function Splash() {
	return (
		<section className="splash-section">
			<div className="splash-text-info">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
					consectetur, adipisci velit...
				</p>
				<Link className="link-button" to="/reservations">
					Reserve a table
				</Link>
			</div>
			<img alt="Little Lemon restaurant food" src={splash}></img>
		</section>
	);
}
