import "./App.css";
import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import "./assets/Karla-VariableFont_wght.ttf";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
	return (
		<React.Fragment className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<></>}></Route>
				<Route path="/menu" element={<></>}></Route>
				<Route path="/reservations" element={<></>}></Route>
				<Route path="/order-online" element={<></>}></Route>
				<Route path="/login" element={<></>}></Route>
			</Routes>
		</React.Fragment>
	);
}

export default App;
