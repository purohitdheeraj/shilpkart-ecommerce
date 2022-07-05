import React, {useState } from "react";
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
	wishlist: localStorage.getItem("wishlist")
		? JSON.parse(localStorage.getItem("wishlist"))
		: [],
};

const WishlistProvider = ({ children }) => {
	const [wishlistState, wishlistDispatch] = useReducer(
		WishlistReducer,
		initialState
	);

	const [wishlistLocal, setWishlistLocal] = useState([]);

	const valueProvider = {
		wishlistArr: wishlistState.wishlist,
		wishlistDispatch,
		wishlistLocal,
		setWishlistLocal,
	};

	return (
		<WishlistContext.Provider value={valueProvider}>
			{children}
		</WishlistContext.Provider>
	);
};

export { WishlistProvider, useWishlistContext };
