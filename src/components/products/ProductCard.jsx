import React from "react";
import { useWishlistContext } from "../../context/wislistContext";

const ProductCard = ({ product, buttonProp }) => {
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

	const WishlistStatus = wishlistState.wishlist.find(
		(el) => el._id === product._id
	);

	const disableWishlist = WishlistStatus ? true : false;

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

					<button className="btn btn-primary">
						Add To Cart
					</button>
					<button
						className="btn btn-primary-outline"
						disabled={disableWishlist}
						onClick={() =>
							buttonProp === "Add To Wishlist"
								? wishlistDispatch({
										type:
											"ADD_TO_WISHLIST",
										payload: product,
								  })
								: wishlistDispatch({
										type:
											"REMOVE_FROM_WISHLIST",
										payload:
											product._id,
								  })
						}
					>
						{buttonProp}
					</button>

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
