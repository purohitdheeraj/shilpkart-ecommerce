import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/cartContext";

export const CartActions = ({ product, classNameProp }) => {
	const { cart, dispatchToCart } = UseCartContext();

	const isProductInCart = cart.findIndex(
		(item) => item._id === product._id
	);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<button className="btn btn-primary">
			{isProductInCart === -1 ? (
				<i
					onClick={() =>
						dispatchToCart({
							type: "ADD_TO_CART",
							payload: product,
						})
					}
				>
					Add To Cart
				</i>
			) : classNameProp ? (
				<i
					onClick={() =>
						dispatchToCart({
							type: "REMOVE_FROM_CART",
							payload: product._id,
						})
					}
				>
					Remove From Cart
				</i>
			) : (
				<Link className="btn-cart btn" to="/cart">
					<i>Go To Cart</i>
				</Link>
			)}
		</button>
	);
};
