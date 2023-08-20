import React from "react";
import Header from "../Shared/Header";
import Main from "./Main";
import Footer from "../Shared/Footer";

export default function Home() {
	return (
		<React.Fragment>
			<Header />
			<Main />
			<Footer />
		</React.Fragment>
	);
}
