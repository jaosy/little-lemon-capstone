import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

export default function BookingForm({ availableTimes }) {
	const earliestDate = DateTime.now().toFormat("yyyy-MM-dd").toString();
	console.log(earliestDate);
	const [date, setDate] = useState(earliestDate);
	const [time, setTime] = useState("17:00");
	const [guests, setGuests] = useState(1);
	const [occasion] = useState("Dinner");

	return (
		<React.Fragment>
			<div className="booking-form-div" role="parent-container-booking-form">
				<form className="booking-form">
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						min={earliestDate}
						value={date}
						onChange={(e) => {
							setDate(e.target.value);
							console.log(e.target.value);
						}}
					/>
					<label htmlFor="res-time">Choose time</label>
					<select id="res-time">
						{availableTimes.map((time) => (
							<option>{time}</option>
						))}
					</select>
					<label htmlFor="guests">Number of guests</label>
					<input type="number" placeholder="1" min="1" max="10" id="guests" />
					<label htmlFor="occasion">Occasion</label>
					<select id="occasion">
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
					<input type="submit" value="Make your reservation" />
				</form>
			</div>
		</React.Fragment>
	);
}
