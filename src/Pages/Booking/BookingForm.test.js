import { render, screen, fireEvent } from "@testing-library/react";
import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { DateTime } from "luxon";
import { fetchAPI } from "../../FakeApi";

test("Renders the input labels in BookingForm", () => {
	const availableTimes = ["17:00", "18:00"];
	const dispatchDateChanged = jest.fn();

	render(
		<BookingForm
			availableTimes={availableTimes}
			dispatchDateChanged={dispatchDateChanged}
		/>
	);

	const chooseDateLabelElement = screen.getByLabelText("Choose date");
	const chooseTimeLabelElement = screen.getByLabelText("Choose time");
	const numberOfGuestsLabelElement = screen.getByLabelText("Number of guests");
	const occasionLabelElement = screen.getByLabelText("Occasion");

	expect(chooseDateLabelElement).toBeInTheDocument();
	expect(chooseTimeLabelElement).toBeInTheDocument();
	expect(numberOfGuestsLabelElement).toBeInTheDocument();
	expect(occasionLabelElement).toBeInTheDocument();
});

test("Validate initializeTimes function returns correct expected value", () => {
	const initializeTimes = () => {
		return fetchAPI(new Date());
	};

	expect(initializeTimes().length).toBeGreaterThan(0);
});

// https://testing-library.com/docs/example-react-hooks-usereducer/
// At the time of writing, instructions from prev. implementation said to keep the state at the initial value
test("Update times function returns the same value provided in the state", () => {
	// initializer
	const initializeTimes = () => ["12:00"];

	const updatedTimes = fetchAPI(new Date(2024, 7, 24));

	// reducer
	function updateTimes(state = initializeTimes(), action) {
		switch (action.type) {
			case "Date changed":
				return fetchAPI(new Date(2024, 7, 24));
			default:
				return state;
		}
	}

	const Example = () => {
		const [availableTimes, dispatch] = useReducer(
			updateTimes,
			initializeTimes()
		);

		return (
			<div>
				<ul role="availableTimesSpan">
					{availableTimes.map((time) => (
						<li role="item">{time}</li>
					))}
				</ul>
				<button
					onClick={() =>
						dispatch({
							type: "Date changed",
							date: new Date(2023, 7, 24),
						})
					}>
					Change date
				</button>
			</div>
		);
	};

	render(<Example />);
	let availableTimesOptions = screen.getAllByRole("item").map((item) => {
		return item.textContent;
	});
	// check equal to initial
	expect(availableTimesOptions).toStrictEqual(initializeTimes());
	// click the button to fire dispatch event
	fireEvent.click(screen.getByText("Change date"));
	// check that times did change
	availableTimesOptions = screen.getAllByRole("item").map((item) => {
		return item.textContent;
	});
	expect(availableTimesOptions).not.toStrictEqual(initializeTimes());
});
