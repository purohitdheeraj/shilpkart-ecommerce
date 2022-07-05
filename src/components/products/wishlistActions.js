import React, { useEffect } from "react";
import { useWishlistContext } from "../../context/wislistContext";

export const WishListActions = ({ product }) => {
	const {
		wishlistDispatch,
		wishlistArr,
	} = useWishlistContext();

	useEffect(() => {
		localStorage.setItem(
			"wishlist",
			JSON.stringify(wishlistArr)
		);
	}, [wishlistArr]);

	const isProductInWishlist = wishlistArr.findIndex(
		(el) => el._id === product._id
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
					Add To Wishlist
				</i>
			)}
		</button>
	);
};
