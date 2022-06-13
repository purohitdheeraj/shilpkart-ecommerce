import { useWishlistContext } from "../../context/wislistContext";
import { ProductCard } from "../Products/ProductCard";

const Wishlist = () => {
	const { wishlistState } = useWishlistContext();

	const { wishlist } = wishlistState;

	console.log(wishlist);
	return (
		<div>
			{wishlist && (
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
			)}
		</div>
	);
};

export { Wishlist };
