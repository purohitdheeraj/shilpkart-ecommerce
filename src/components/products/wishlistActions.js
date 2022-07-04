import React, { useEffect } from "react";
import { useWishlistContext } from "../../context/wislistContext";

export const WishListActions = ({ product }) => {
	const {
		wishlistArr,
		wishlistDispatch,
	} = useWishlistContext();

	useEffect(() => {
		localStorage.setItem(
			"wishlist",
			JSON.stringify(wishlistArr)
		);
		// console.log(wishlistArr);
	}, [wishlistArr]);

	// bug : one be less error
	const wishlistCheck = localStorage.getItem("wishlist")
		? JSON.parse(localStorage.getItem("wishlist"))
		: wishlistArr;

	const isProductInWishlist = wishlistArr.findIndex(
		(el) => el._id === product._id
	);

	console.log(
		"actions",
		localStorage.getItem("wishlist")
			? JSON.parse(localStorage.getItem("wishlist"))
			: wishlistArr
	);

	return (
		<button className="btn btn-primary-outline">
			{isProductInWishlist !== -1 ? (
				<i
					onClick={() =>
						wishlistDispatch({
							type: "REMOVE_FROM_WISHLIST",
							payload: product._id,
						})
					}
				>
					{" "}
					Remove From Wishlist
				</i>
			) : (
				<i
					onClick={() =>
						wishlistDispatch({
							type: "ADD_TO_WISHLIST",
							payload: product,
						})
					}
				>
					{" "}
					Add To Wishlist
				</i>
			)}
		</button>
	);
};
