import "./App.css";
import React from "react";
import "./assets/Karla-VariableFont_wght.ttf";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import OrderOnline from "./Pages/Order Online";
import Login from "./Pages/Login";

function App() {
	return (
		<React.Fragment className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/menu" element={<Menu />}></Route>
				<Route path="/reservations" element={<></>}></Route>
				<Route path="/order-online" element={<OrderOnline />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</React.Fragment>
	);
}

export default App;
