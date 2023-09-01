import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Layout.css";

export default function Header() {
	const [isNavExpanded, setIsNavExpanded] = useState(false);

	return (
		<React.Fragment>
			<header className="header container grid">
				<Link className="header-logo" to="/">
					<img alt="Little Lemon" src={logo}></img>
				</Link>
				<button
					className="nav-hamburger"
					type="button"
					onClick={() => setIsNavExpanded(!isNavExpanded)}>
					{isNavExpanded ? (
						<FontAwesomeIcon icon={faXmark} size="2x" />
					) : (
						<FontAwesomeIcon icon={faBars} size="2x" />
					)}
				</button>
				<ul
					className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
					onClick={() => setIsNavExpanded(!isNavExpanded)}>
					<li key="home">
						<Link to="/">Home</Link>
					</li>
					<li key="about">
						<Link to="/about">About</Link>
					</li>
					<li key="menu">
						<Link to="/menu">Menu</Link>
					</li>
					<li key="reservations">
						<Link to="/reservations">Reservations</Link>
					</li>
					<li key="order-online">
						<Link to="/order-online">Order Online</Link>
					</li>
					<li key="login">
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</header>
		</React.Fragment>
	);
}
