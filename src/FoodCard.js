import React from "react";
import delivery from "./assets/delivery.png";

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
				Order{" "}
				<img src={delivery} alt="delivery icon" className="delivery-icon"></img>
			</div>
		</div>
	);
};

export default FoodCard;
