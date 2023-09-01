import React from "react";
import splash from "../assets/splash pic.png";
import { Link } from "react-router-dom";
import "./Splash.css";

export default function Splash() {
	return (
		<section className="splash-section" role="splash-content-container">
			<div className="container grid">
				<div className="splash-text-info">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						We are a family-owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					<p>Order online, browse our menu or reserve a table now.</p>
					<Link className="link-button" to="/reservations">
						Reserve a table
					</Link>
				</div>
				<img
					className="splash-image"
					alt="Little Lemon restaurant food"
					src={splash}></img>
			</div>
		</section>
	);
}
