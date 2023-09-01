import React from "react";
import logowhite from "../assets/logowhite.png";
import { Link } from "react-router-dom";
import "./Layout.css";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container grid">
				<img alt="Little Lemon" src={logowhite} className="footer-logo"></img>
				<nav className="footer-nav">
					<ul className="footer-nav-links">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/#about">About</Link>
						</li>
						<li>
							<Link to="/menu">Menu</Link>
						</li>
						<li>
							<Link to="/reservations">Reservations</Link>
						</li>
						<li>
							<Link to="/order-online">Order</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</nav>
				<section className="contact" role="contact">
					<h4>Contact Us</h4>
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
				<section className="social-media" role="social-media-link">
					<h4>Social Media</h4>
					<ul>
						<li>
							<a href="instagram.com">Instagram</a>
						</li>
						<li>
							<a href="facebook.com">Facebook</a>
						</li>
					</ul>
				</section>
			</div>
		</footer>
	);
}
