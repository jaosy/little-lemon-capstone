import React from "react";
import "./Booking.css";

export default function ConfirmedBooking() {
	return (
		<React.Fragment>
			<div className="confirmed-booking-div" role="confirmed-booking-container">
				<h1>Your booking has been confirmed!</h1>
				<h2 color="#495e57">Details will be sent to your email</h2>
			</div>
		</React.Fragment>
	);
}
