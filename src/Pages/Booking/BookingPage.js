import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import "./Booking.css";
import { fetchAPI, submitAPI } from "../../FakeApi";

export default function BookingPage() {
	const navigate = useNavigate();
	const [showInvalidForm, setShowInvalidForm] = useState(false);

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
		if (
			formData.date === "" ||
			formData.email === "" ||
			formData.occasion === "" ||
			formData.guests === "" ||
			formData.time === ""
		) {
			setShowInvalidForm(true);
		}

		const response = submitAPI(formData);
		if (response) {
			navigate("/booking-confirmed");
		}
	};

	return (
		<React.Fragment>
			<div className="booking-page">
				<h1>Book Now</h1>
				<BookingForm
					availableTimes={availableTimes}
					dispatchDateChanged={dispatchDateChanged}
					onSubmit={submitBooking}
				/>
				{showInvalidForm && <p>You did not fill out one of the fields</p>}
			</div>
		</React.Fragment>
	);
}
