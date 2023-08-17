import React from "react";
import logo from '../src/assets/Logo.svg'

export default function Footer(){
  return (
  <footer className='footer'>
    <img alt="logo" src={logo}></img>
  <nav className="footer-nav">
      <ul className="footer-nav-links">
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/reservations">Reservations</a></li>
      <li><a href="/order">Order</a></li>
      <li><a href="/online">Online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
  <section role="contact">
    <ul>
      <li>Address</li>
      <li>Phone number</li>
      <li>Email</li>
    </ul>
  </section>
  <section role="social-media-link">
    <ul>
      <li>Address</li>
      <li>Phone number</li>
      <li>Email</li>
    </ul>
  </section>
  </footer>);
}