import React from "react";
import { useParams } from "react-router-dom";
import { newProducts } from "../../backend/db/newProducts";

export function ProductDetail() {
	let { _id } = useParams();
	// id = Number(id);
	console.log(_id);
	const product = newProducts.find(
		(product) => product._id === _id
	);
	return (
		<div>
			<h3>{product.title}</h3>
			<p>{product.categoryName}</p>
		</div>
	);
}
