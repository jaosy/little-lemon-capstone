import React from "react";
import logowhite from "../src/assets/logowhite.png";

export default function Footer() {
	return (
		<footer className="footer">
			<img alt="logo" src={logowhite}></img>
			<nav className="footer-nav">
				<ul className="footer-nav-links">
					<li>
						<a href="/home">Home</a>
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
						<a href="/order">Order</a>
					</li>
					<li>
						<a href="/online">Online</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
				</ul>
			</nav>
			<section role="contact">
				<div className="footer-section-header">Contact Information</div>
				<ul>
					<li>123 Eat Street</li>
					<li>123-456-789</li>
					<li>
						<a href="mailto:littlelemon@restaurant.com">
							littlelemon@restaurant.com
						</a>
					</li>
				</ul>
			</section>
			<section role="social-media-link">
				<div className="footer-section-header">Social Media</div>
				<ul>
					<li>
						<a href="instagram.com">Instagram</a>
					</li>
					<li>
						<a href="facebook.com">Facebook</a>
					</li>
				</ul>
			</section>
		</footer>
	);
}
