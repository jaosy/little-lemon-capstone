import React from "react";

export default function Nav() {
	return (
		<nav className="nav">
			<ul className="nav-bar-links">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/menu">Menu</a>
				</li>
				<li>
					<a href="/reservations">Reservations</a>
				</li>
				<li>
					<a href="/order-online">Order Online</a>
				</li>
				<li>
					<a href="/login">Login</a>
				</li>
			</ul>
		</nav>
	);
}
