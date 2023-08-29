import React from "react";
import mario_adrian from "../assets/mario_adrian.jpg";

export default function AboutContent() {
	return (
		<div className="about-content-div">
			<div className="about-content-text">
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
			<img src={mario_adrian} alt="Mario and Adrian"></img>
		</div>
	);
}
