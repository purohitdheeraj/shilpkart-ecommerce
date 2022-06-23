import React from "react";
import { NavLink } from "react-router-dom";
import { UseCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wislistContext";

import "./productCard.css";
import { WishListActions } from "./wishlistActions";
const HorizontalCard = ({
	product,
	wishlistButtonProp,
	cartButtonProp,
	homeSpaProp,
}) => {
	const {
		title,
		price,
		description,
		imgSrc,
		ratings,
	} = product;

	const {
		wishlistState,
		wishlistDispatch,
	} = useWishlistContext();

	const { cart, dispatchToCart } = UseCartContext();

	const WishlistStatus = wishlistState.wishlist.find(
		(el) => el._id === product._id
	);

	const disableWishlist = WishlistStatus ? true : false;

	const CartStatus = cart.find(
		(item) => item._id === product._id
	);

	const disableCart = CartStatus ? true : false;

	return (
		<>
			<li className="card-horizontal card  text-center">
				<div className="card-text">
					<h6 className="h6">{title}</h6>

					<p className="p-sm text-left">
						{description}
					</p>

					<div className="quantity text-left">
						<h4>Quantity:</h4>

						<button>+</button>

						<input
							className="input-field"
							type="number"
						/>

						<button>-</button>
					</div>

					<div className="text-left ">
						<h4>Price:</h4> {"  "}
						<span className="p-sm">
							<i className="fa fa-inr"></i>
						</span>
						<span className="price-tag">
							{price.toLocaleString("en-IN")}
							/-
						</span>
					</div>

					<span className="text-right high">
						{ratings}
					</span>
				</div>
				<div className="card-cover badge-container">
					{homeSpaProp ? (
						<NavLink
							to={`./products/${product._id}`}
						>
							<img src={imgSrc} alt={title} />
						</NavLink>
					) : (
						<NavLink to={`./${product._id}`}>
							<img src={imgSrc} alt={title} />
						</NavLink>
					)}

					<div className="cart_buttons">
						{cartButtonProp ? (
							<button
								className="btn btn-primary-outline"
								onClick={() =>
									dispatchToCart({
										type:
											"REMOVE_FROM_CART",
										payload:
											product._id,
									})
								}
							>
								Remove From Cart
							</button>
						) : (
							<button
								disabled={disableCart}
								className="btn btn-primary"
								onClick={() =>
									dispatchToCart({
										type: "ADD_TO_CART",
										payload: product,
									})
								}
							>
								Add To Cart
							</button>
						)}

						<WishListActions
							product={product}
						/>
					</div>
				</div>
			</li>
		</>
	);
};

export { HorizontalCard };
