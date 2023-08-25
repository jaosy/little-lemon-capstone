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

	return (
		<React.Fragment>
			<div className="booking-form-div" role="parent-container-booking-form">
				<form className="booking-form">
					<label htmlFor="email">Contact email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}></input>
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
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
						onChange={(e) => setTime(e.target.value)}>
						{availableTimes.map((time) => (
							<option>{time}</option>
						))}
					</select>
					<label htmlFor="guests">Number of guests</label>
					<input
						type="number"
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
						value={occasion}
						onChange={(e) => setOccasion(e.target.value)}>
						<option>Dinner</option>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
					<input
						type="submit"
						value="Make your reservation"
						onClick={() => onSubmit({ email, date, time, guests, occasion })}
					/>
				</form>
			</div>
		</React.Fragment>
	);
}
