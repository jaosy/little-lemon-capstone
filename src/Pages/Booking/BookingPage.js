import React, { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";
import { fetchAPI, submitAPI } from "../../FakeApi";

export default function BookingPage() {
	const navigate = useNavigate();

	// initializer
	const initializeTimes = () => {
		return fetchAPI(new Date());
	};

	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

	// reducer
	function updateTimes(availableTimes, date) {
		const response = fetchAPI(new Date(date.date));
		return response.length == 0 ? availableTimes : response;
	}

	// dispatch
	// The dispatch function that lets you change it in response to interaction
	// to update what’s on the screen, call dispatch with an object representing what the user did, called an action:
	const dispatchDateChanged = (date) => {
		dispatch({ type: "changedDate", date: date });
	};

	const submitBooking = (formData) => {
		console.log(formData);
		const response = submitAPI(formData);
		if (response) {
			navigate("/booking-confirmed");
		}
	};

	return (
		<React.Fragment>
			<Header />
			<div className="booking-page">
				<h1>Book Now</h1>
				<BookingForm
					availableTimes={availableTimes}
					dispatchDateChanged={dispatchDateChanged}
					onSubmit={submitBooking}
				/>
			</div>
			<Footer />
		</React.Fragment>
	);
}
