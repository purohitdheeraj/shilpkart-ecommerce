import React from "react";
import { NavLink } from "react-router-dom";
import { useWishlistContext } from "../../context/wislistContext";
import { useDocumentTitle } from "../../utils";
import { ProductCard } from "../products/ProductCard";

const Wishlist = () => {
	useDocumentTitle("Wishlist");
	const { wishlistState } = useWishlistContext();

	const { wishlist } = wishlistState;

	// console.log(wishlist);
	return (
		<div>
			{wishlist.length > 0 ? (
				<>
					<div className="text-center">
						Your Wishlist has {wishlist.length}{" "}
						items ✅
					</div>
					<div className="card-container list-style-none">
						{wishlist.map((el) => {
							return (
								<ProductCard
									key={el._id}
									product={el}
									buttonProp="Remove From Wishlist"
								/>
							);
						})}
					</div>
				</>
			) : (
				<>
					<div className="text-center">
						<h2>No items in your wishlist</h2>
						<p className="p-md">
							Add some Items to your Wishlist
						</p>

						<NavLink to="/products">
							Go to Products Page
						</NavLink>
					</div>
				</>
			)}
		</div>
	);
};

export { Wishlist };
