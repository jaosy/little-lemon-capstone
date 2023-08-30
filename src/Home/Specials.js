import React from "react";
import bruschettaImage from "../assets/bruschetta.png";
import salad from "../assets/salad.png";
import fish from "../assets/fish.png";
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";
import "./Specials.css";

const food = [
	{
		name: "Greek Salad",
		price: "$10.00",
		pic: salad,
		description:
			"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
	},
	{
		name: "Bruschetta",
		pic: bruschettaImage,
		price: "$5.99",
		description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
	},
	{
		name: "Grilled Fish",
		pic: fish,
		price: "$5.00",
		description: `Yummy grilled fish with our award-winning lemon garnish. Choose between fresh Atlantic salmon, river tilapia or cod.`,
	},
];

export default function Specials() {
	return (
		<section
			className="container grid specials-section"
			role="specials-container">
			<div className="specials-header">
				<h1>Specials</h1>
				<Link className="link-button" to="/order-online">
					Order Online
				</Link>
			</div>
			{food.map((food, index) => (
				<FoodCard key={index} food={food}></FoodCard>
			))}
		</section>
	);
}
