import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

export default function BookingForm({
	availableTimes,
	dispatchDateChanged,
	onSubmit,
}) {
	const earliestDate = DateTime.now().toFormat("yyyy-MM-dd").toString();
	const [date, setDate] = useState(earliestDate);
	const [time, setTime] = useState("17:00");
	const [guests, setGuests] = useState(1);
	const [occasion, setOccasion] = useState("Dinner");
	const [email, setEmail] = useState("abc@example.com");
	const [disableSubmit, setDisableSubmit] = useState(false);

	useEffect(() => {
		if (
			date === "" ||
			email === "" ||
			guests < 1 ||
			guests > 10 ||
			occasion === "" ||
			time === ""
		) {
			setDisableSubmit(true);
		} else {
			setDisableSubmit(false);
		}
	}, [date, time, guests, occasion, email]);

	return (
		<React.Fragment>
			<div className="booking-form-div" role="parent-container-booking-form">
				<form className="booking-form">
					<label htmlFor="email">Contact email</label>
					<input
						type="email"
						required
						id="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}></input>
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						required
						min={earliestDate}
						value={date}
						onChange={(e) => {
							setDate(e.target.value);
							dispatchDateChanged(e.target.value);
						}}
					/>
					<label htmlFor="res-time">Choose time</label>
					<select
						id="res-time"
						value={time}
						required
						onChange={(e) => setTime(e.target.value)}>
						{availableTimes.map((time) => (
							<option>{time}</option>
						))}
					</select>
					<label htmlFor="guests">Number of guests</label>
					<input
						type="number"
						required
						placeholder="1"
						min="1"
						max="10"
						id="guests"
						value={guests}
						onChange={(e) => setGuests(e.target.value)}
					/>
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						required
						value={occasion}
						onChange={(e) => setOccasion(e.target.value)}>
						<option>Dinner</option>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
					<input
						aria-label="Submit on click"
						type="submit"
						disabled={disableSubmit}
						value="Make your reservation"
						onClick={() => onSubmit({ email, date, time, guests, occasion })}
					/>
				</form>
			</div>
		</React.Fragment>
	);
}
