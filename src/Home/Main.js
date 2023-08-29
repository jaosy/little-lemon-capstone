import React from "react";
import Splash from "./Splash";
import Specials from "./Specials";
import { Testimonals } from "./Testimonials";
import { About } from "./About";

export default function Main() {
	return (
		<main className="main">
			<div role="splash-container" className="main-splash">
				<Splash></Splash>
			</div>
			<section className="main-specials-section">
				<Specials></Specials>
			</section>
			<section className="main-testimonials-section">
				<Testimonals></Testimonals>
			</section>
			<section className="main-about-section">
				<About></About>
			</section>
		</main>
	);
}
