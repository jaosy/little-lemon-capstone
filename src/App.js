import "./App.css";
import React from "react";
import "./assets/Karla-VariableFont_wght.ttf";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Menu from "./Pages/Menu";
import OrderOnline from "./Pages/Order Online";
import Login from "./Pages/Login";
import BookingPage from "./Pages/Booking/BookingPage";
import ConfirmedBooking from "./Pages/Booking/ConfirmedBooking";
import { About } from "./Home/About";
import { Layout } from "./Shared/Layout";

function App() {
	return (
		<React.Fragment>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/menu" element={<Menu />}></Route>
					<Route
						path="/reservations"
						element={<BookingPage></BookingPage>}></Route>
					<Route path="/order-online" element={<OrderOnline />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route
						path="/booking-confirmed"
						element={<ConfirmedBooking />}></Route>
				</Routes>
			</Layout>
		</React.Fragment>
	);
}

export default App;
