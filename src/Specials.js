import React from "react";
import bruschettaImage from "./assets/bruschetta.png";
import salad from "./assets/salad.png";
import fish from "./assets/fish.png";
import FoodCard from "./FoodCard";

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
		description: `Yummy grilled fish with lemon garnish`,
	},
];

export default function Specials() {
	return (
		<div className="specials-div">
			<h1>Specials</h1>
			<div className="specials-food-cards-div">
				{" "}
				{food.map((food, index) => (
					<FoodCard key={index} food={food}></FoodCard>
				))}
			</div>
		</div>
	);
}
