import React from "react";

export default function Footer(){
  return (<footer><img alt="logo" src="Logo.svg"></img>
  <nav>
      <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/reservations">Reservations</a></li>
      <li><a href="/order">Order</a></li>
      <li><a href="/online">Online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
  <div role="contact">
    <ul>
      <li>Address</li>
      <li>Phone number</li>
      <li>Email</li>
    </ul>
  </div>
  <div role="social-media-link">
    <ul>
      <li>Address</li>
      <li>Phone number</li>
      <li>Email</li>
    </ul>
  </div>
  </footer>);
}