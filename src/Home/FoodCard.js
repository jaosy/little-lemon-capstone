import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import "./FoodCard.css";

const FoodCard = ({ food }) => {
	return (
		<article className="food-card" role="food-card-parent-container">
			<div className="food-card-image">
				<img src={food.pic} alt={food.name}></img>
			</div>
			<div className="food-card-header" role="food-card-information-container">
				<h3>{food.name}</h3>
				<span>{food.price}</span>
			</div>
			<div className="food-card-info">
				<p>{food.description}</p>
			</div>
			<footer className="food-card-footer" role="food-card-footer-container">
				<Link to="/order-online" className="link-button">
					Order <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon>
				</Link>
			</footer>
		</article>
	);
};

export default FoodCard;
