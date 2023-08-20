import React from "react";
import delivery from "../assets/delivery.png";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
	return (
		<div className="food-card-div">
			<img src={food.pic} alt={food.name} className="food-card-img"></img>
			<div className="food-card-info">
				<h3>{food.name}</h3>
				<span>{food.price}</span>
				<p>{food.description}</p>
			</div>
			<div className="food-card-footer">
				<Link to="/order-online" className="link-button">
					Order
				</Link>
				<div id="food-card-delivery-icon">
					<img
						src={delivery}
						alt="delivery icon"
						className="delivery-icon"></img>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
