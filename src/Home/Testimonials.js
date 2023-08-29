import React from "react";
import TestimonialCard from "./TestimonialCard";
import bob from "../assets/bob.jpg";
import michelle from "../assets/michelle.jpg";
import samara from "../assets/samara.jpg";

const testimonialData = [
	{
		rating: 5,
		name: "Bob",
		description: "Lovely atmosphere and food, perfect for a dinner date",
		pic: bob,
	},
	{
		rating: 5,
		name: "Michelle",
		description: "Compliments to the chef! Everything was perfect.",
		pic: michelle,
	},
	{
		rating: 5,
		name: "Samara",
		description:
			"The waiters were super attentive and made my celebration dinner an incredible event at Little Lemon.",
		pic: samara,
	},
];

export function Testimonals() {
	return (
		<section className="specials-div" role="testimonials-container">
			<div className="specials-div-header">
				<h1>Testimonials</h1>
			</div>
			<div
				className="specials-food-cards-div"
				role="testimonials-cards-container">
				{testimonialData.map((testimonial, index) => (
					<TestimonialCard key={index} data={testimonial}></TestimonialCard>
				))}
			</div>
		</section>
	);
}
