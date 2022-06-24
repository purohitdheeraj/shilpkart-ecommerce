import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ category }) => {
	const { imgSrc, categoryName } = category;

	return (
		<div className="type flex-column">
			<Link to="/products">
				<img src={imgSrc} alt={categoryName} />
			</Link>
			<span className="type-text text-center">
				{categoryName}
			</span>
		</div>
	);
};
