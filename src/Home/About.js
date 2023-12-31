import React from "react";
import mario_adrian from "../assets/mario_adrian.jpg";
import "./about.css";

export function About() {
	return (
		<section className="about">
			<div className="container grid">
				<div id="about" className="about-info">
					<h1>About</h1>
					<h2>Little Lemon Founders</h2>
					<p>
						We are Mario and Adrian and we started Little Lemon in 2023 from our
						love of cooking.
					</p>
					<p>
						If you can't find answers to your questions about our menu or dining
						options on our website, feel free to contact us and we're happy to
						help you plan your visit.
					</p>
				</div>
				<figure className="about-image">
					<img src={mario_adrian} alt="Mario and Adrian"></img>
				</figure>
			</div>
		</section>
	);
}
