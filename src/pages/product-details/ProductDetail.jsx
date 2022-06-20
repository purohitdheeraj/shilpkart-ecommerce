import React from "react";
import { useParams } from "react-router-dom";
import { useCommonData } from "../../context/dataContext";

export function ProductDetail() {
	const { products } = useCommonData();

	let { _id } = useParams();
	// id = Number(id);
	console.log(_id);
	console.log(products);
	const product = products.find(
		(product) => product._id === _id
	);
	console.log("prd", product);
	return (
		<div>
			<img src={product.imgSrc} alt={product.title} />
			<h3>{product.title}</h3>
			<p>{product.categoryName}</p>
		</div>
	);
}
