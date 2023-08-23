import React from "react";
import BookingForm from "./BookingForm";
import Header from "../../Shared/Header";
import { DateTime } from "luxon";
import Footer from "../../Shared/Footer";

export default function BookingPage() {
	return (
		<React.Fragment>
			<Header />
			<BookingForm />
			<Footer />
		</React.Fragment>
	);
}
