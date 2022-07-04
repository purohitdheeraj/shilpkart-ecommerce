import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useWishlistContext } from "../../context/wislistContext";
import { useDocumentTitle } from "../../utils";
import { ProductCard } from "../../components/products/ProductCard";

const Wishlist = () => {
	useDocumentTitle("Wishlist");
	const { wishlistArr } = useWishlistContext();

	

	return (
		<div>
			{wishlistArr.length > 0 ? (
				<>
					<div className="text-center">
						Your Wishlist has{" "}
						{wishlistArr.length} items ✅
					</div>
					<div className="card-container list-style-none">
						{wishlistArr.map((el) => {
							return (
								<ProductCard
									key={el._id}
									product={el}
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
