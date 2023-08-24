import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";

export default function BookingPage() {
	// initializer
	const initializeTimes = () => [
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	];

	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

	// reducer
	function updateTimes() {
		return availableTimes;
	}

	// dispatch
	// The dispatch function that lets you change it in response to interaction
	// to update what’s on the screen, call dispatch with an object representing what the user did, called an action:
	const dispatchDateChanged = (date) => {
		dispatch({ type: "changedDate", date: date });
	};

	return (
		<React.Fragment>
			<Header />
			<div className="booking-page">
				<h1>Book Now</h1>
				<BookingForm
					availableTimes={availableTimes}
					dispatchDateChanged={dispatchDateChanged}
				/>
			</div>
			<Footer />
		</React.Fragment>
	);
}
