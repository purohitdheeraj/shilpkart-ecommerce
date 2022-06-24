import React from "react";
import {
	createContext,
	useContext,
	useReducer,
} from "react";
import { WishlistReducer } from "../reducer";

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

	const valueProvider = {
		wishlistArr: wishlistState.wishlist,
		wishlistDispatch,
	};

	return (
		<WishlistContext.Provider value={valueProvider}>
			{children}
		</WishlistContext.Provider>
	);
};

export { WishlistProvider, useWishlistContext };
