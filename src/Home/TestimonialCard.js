import React from "react";
import star from "../assets/star.png";

export default function TestimonialCard({ data }) {
	const makeRating = () => {
		let stars = [];
		for (let i = 0; i < data.rating; i++) {
			stars.push(
				<span>
					<img
						width="8%"
						src={star}
						alt={data.rating + "star review"}
						className="testimonial-star"></img>
				</span>
			);
		}

		return stars;
	};

	return (
		<article
			className="testimonial-card-div"
			role="testimonial-card-parent-container">
			<div className="testimonial-info">
				{makeRating()}
				<p className="testimonial-name">{data.name}</p>
				<p>{data.description}</p>
			</div>
			<div className="testimonial-picture">
				<img src={data.pic} alt={data.name}></img>
			</div>
		</article>
	);
}
