import { createContext, useContext, useState } from "react";
import { useReducer } from "react";
import { WishlistReducer } from "./wishlistReducer";

const WishlistContext = createContext();
const useWishlistContext = () =>
	useContext(WishlistContext);

const initialState = {
	wishlist: [],
};

const WishlistProvider = ({ children }) => {
	const [wishlistState, wishlistDispatch] = useReducer(
		WishlistReducer,
		initialState
	);

	return (
		<WishlistContext.Provider
			value={{
				wishlistState,
				wishlistDispatch,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
};

export { WishlistProvider, useWishlistContext };
