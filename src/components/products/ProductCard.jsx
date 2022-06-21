import React from "react";
import { NavLink } from "react-router-dom";
import { UseCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wislistContext";
import "./productCard.css";
const ProductCard = ({
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
		availability,
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
			<li className="card text-center">
				<div className="card-text">
					<h6 className="h6">{title}</h6>

					<p className="p-sm text-left">
						{description}
					</p>

					{cartButtonProp ? (
						<button
							className="btn btn-primary-outline"
							onClick={() =>
								dispatchToCart({
									type:
										"REMOVE_FROM_CART",
									payload: product._id,
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

					{wishlistButtonProp ? (
						<button
							className="btn btn-primary-outline"
							onClick={() =>
								wishlistDispatch({
									type:
										"REMOVE_FROM_WISHLIST",
									payload: product._id,
								})
							}
						>
							{wishlistButtonProp}
						</button>
					) : (
						<button
							className="btn btn-primary-outline"
							disabled={disableWishlist}
							onClick={() =>
								wishlistDispatch({
									type: "ADD_TO_WISHLIST",
									payload: product,
								})
							}
						>
							Add To Wishlist
						</button>
					)}

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

					<div className="badge  badge-top">
						<span>{availability.badge}</span>
					</div>
				</div>
			</li>
		</>
	);
};

export { ProductCard };
