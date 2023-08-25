import React from "react";
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";

export default function ConfirmedBooking() {
	return (
		<React.Fragment>
			<Header></Header>
			<div className="confirmed-booking-div" role="confirmed-booking-container">
				<h1>Your booking has been confirmed!</h1>
				<h2 color="#495e57">Details will be sent to your email</h2>
			</div>
			<Footer></Footer>
		</React.Fragment>
	);
}
