import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

export default function BookingForm() {
	const earliestDate = DateTime.now().toFormat("yyyy-MM-dd").toString();
	console.log(earliestDate);
	const [date, setDate] = useState(earliestDate);
	const [time, setTime] = useState("17:00");
	const [guests, setGuests] = useState(1);
	const [occasion] = useState("Dinner");

	return (
		<React.Fragment>
			<div className="booking-form-div">
				<form className="booking-form">
					<label for="res-date">Choose date</label>
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
					<label for="res-time">Choose time</label>
					<select id="res-time ">
						<option>17:00</option>
						<option>18:00</option>
						<option>19:00</option>
						<option>20:00</option>
						<option>21:00</option>
						<option>22:00</option>
					</select>
					<label for="guests">Number of guests</label>
					<input type="number" placeholder="1" min="1" max="10" id="guests" />
					<label for="occasion">Occasion</label>
					<select id="occasion">
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
					<input type="submit" value="Make Your reservation" />
				</form>
			</div>
		</React.Fragment>
	);
}
