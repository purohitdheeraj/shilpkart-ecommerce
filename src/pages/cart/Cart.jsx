import React from "react";
import { CartInfo } from "./CartInfo";
import { UseCartContext } from "../../context/cartContext";
import { useDocumentTitle } from "../../utils";
import { ProductCard } from "../../components/products/ProductCard";

import "../Products/product.css";
import "./cart.css";
const Cart = () => {
	useDocumentTitle("Cart");
	const { cart } = UseCartContext();

	return (
		<main className="cart-container">
			<article>
				{cart.length > 0 ? (
					<>
						{cart.map((item) => (
							<ProductCard
								classNameProp="card-horizontal"
								key={item._id}
								product={item}
							/>
						))}
					</>
				) : (
					<span></span>
				)}
			</article>

			<CartInfo cart={cart} />
		</main>
	);
};

export { Cart };
