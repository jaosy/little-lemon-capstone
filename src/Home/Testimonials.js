import samara from "../assets/samara.jpg";
import shaggy from "../assets/shaggy.jpg";
import michelle from "../assets/michelle.jpg";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const data = [
	{
		fullName: "Samara",
		image: samara,
		rating: [1, 1, 1, 1, 0.5],
		review:
			"The waiters were super attentive and made my celebration dinner an incredible event at Little Lemon.",
	},
	{
		fullName: "Michelle",
		image: michelle,
		rating: [1, 1, 1, 1, 1],
		review: "Compliments to the chef! Everything was perfect.",
	},
	{
		fullName: "Shaggy",
		image: shaggy,
		rating: [1, 1, 1, 1, 0.5],
		review: "Has the best food in town, and its dog friendly too!",
	},
];

const Testimonials = () => {
	return (
		<section className="testimonials">
			<div className="container grid">
				<h1>Diner Testimonials</h1>
				{data.map((customer, index) => (
					<TestimonialCard key={index} customer={customer} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;
