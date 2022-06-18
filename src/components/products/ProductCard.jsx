import React from "react";
import { UseCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wislistContext";

const ProductCard = ({
	product,
	wishlistButtonProp,
	cartButtonProp,
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
			<li className="card text-center">
				<div className="card-text">
					<h6 className="h6">
						{title}
						{/* <NavLink to={`./${product._id}`}>
						</NavLink> */}
					</h6>

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

					<div className="text-left">
						Price:{" "}
						<span>
							<i className="fa fa-rupee"></i>
						</span>
						<span className="price-tag">
							{price}/-
						</span>
					</div>
					<div className="text-right">
						{ratings}
					</div>
				</div>
				<div className="card-cover badge-container">
					<img src={imgSrc} alt={title} />
					<div className="badge badge-top">
						New
					</div>
				</div>
			</li>
		</>
	);
};

export { ProductCard };
