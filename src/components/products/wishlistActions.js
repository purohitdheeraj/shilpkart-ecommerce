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
	}, [wishlistArr]);

	const WishlistStatus = wishlistArr.find(
		(el) => el._id === product._id
	);

	const disableWishlist = WishlistStatus ? true : false;

	return disableWishlist ? (
		<button
			className="btn btn-primary-outline"
			onClick={() =>
				wishlistDispatch({
					type: "REMOVE_FROM_WISHLIST",
					payload: product._id,
				})
			}
		>
			Remove From Wishlist
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
	);
};
