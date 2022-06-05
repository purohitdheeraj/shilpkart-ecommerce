import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { ProductDetail } from "./ProductDetail";

export function ProductList({ products }) {
	return (
		<div>
			<h2>Products</h2>
			<ul className="card-container list-style-none">
				{products.map((product) => (
					<ProductCard
						key={product._id}
						product={product}
					/>
				))}
			</ul>
		</div>
	);
}
