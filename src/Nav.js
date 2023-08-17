import React from "react";
import logo from '../src/assets/Logo.svg'

export default function Nav(){
  return (<nav className="nav">
    <img alt="Little Lemon" src={logo}></img>
    <ul className="nav-bar-links">
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/reservations">Reservations</a></li>
      <li><a href="/order">Order</a></li>
      <li><a href="/online">Online</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>);
}