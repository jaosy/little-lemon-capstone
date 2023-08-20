import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

export default function Home() {
	return (
		<React.Fragment>
			<Header />
			<Nav />
			<Main />
			<Footer />
		</React.Fragment>
	);
}
