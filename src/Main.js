import React from "react";
import Splash from "./Splash";
import Specials from "./Specials";

export default function Main() {
	return (
		<main className="main">
			<div role="splash" className="main-splash">
				<Splash></Splash>
			</div>
			<section className="main-specials-section">
				<Specials></Specials>
			</section>
		</main>
	);
}
