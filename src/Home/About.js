import React from "react";
import AboutContent from "./AboutContent";

export function About() {
	return (
		<section className="specials-div role=about-container">
			<div id="about" className="specials-div-header">
				<h1>About</h1>
			</div>
			<AboutContent />
		</section>
	);
}
