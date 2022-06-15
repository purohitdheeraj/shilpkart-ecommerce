// import { NavLink } from "react-router-dom";

import { useWishlistContext } from "../../context/wislistContext";

const ProductCard = ({ product, buttonProp }) => {
	const { title, price, description, imgSrc, ratings } =
		product;

	const { wishlistState, wishlistDispatch } =
		useWishlistContext();

	const WishlistStatus = wishlistState.wishlist.find(
		(el) => el._id === product._id
	);

	const disableWishlist = WishlistStatus ? true : false;
	// console.log(disableWishlist);

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

					<button
						className="btn btn-primary"
						role="button"
					>
						Add To Cart
					</button>
					<a
						className="btn btn-primary-outline"
						role="button"
						disabled={disableWishlist}
						onClick={() =>
							buttonProp === "Add To Wishlist"
								? wishlistDispatch({
										type: "ADD_TO_WISHLIST",
										payload: product,
								  })
								: wishlistDispatch({
										type: "REMOVE_FROM_WISHLIST",
										payload:
											product._id,
								  })
						}
					>
						{buttonProp}
					</a>

					<div className="text-left">
						Price:{" "}
						<a href="#">
							<i className="fa fa-rupee"></i>
						</a>
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
