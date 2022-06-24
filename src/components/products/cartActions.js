import React from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../context/cartContext";

export const CartActions = ({
	product,
	cartButtonProp,
}) => {
	const { cart, dispatchToCart } = UseCartContext();

	const CartStatus = cart.find(
		(item) => item._id === product._id
	);

	const disableCart = CartStatus ? true : false;
	const onClickCart = CartStatus ? (
		<Link
			to="/cart"
			className="btn-cart btn btn-primary"
		>
			Go To Cart
		</Link>
	) : (
		"Add To Cart"
	);
	return CartStatus ? (
		cartButtonProp ? (
			<button
				className="btn btn-primary-outline"
				onClick={() =>
					dispatchToCart({
						type: "REMOVE_FROM_CART",
						payload: product._id,
					})
				}
			>
				Remove From Cart
			</button>
		) : (
			onClickCart
		)
	) : (
		<button
			className="btn btn-primary"
			onClick={() =>
				dispatchToCart({
					type: "ADD_TO_CART",
					payload: product,
				})
			}
		>
			{onClickCart}
		</button>
	);
};
