import { useWishListContext } from "../../context/wislistContext";

const Wishlist = () => {
	const { wishlist } = useWishListContext();

	console.log(wishlist);

	return <div>your divine wishlist{wishlist}</div>;
};

export { Wishlist };
