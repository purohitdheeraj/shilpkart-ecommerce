import { createContext, useContext } from "react";

const WishListContext = createContext();

const initialState = {
	wishlist: [],
};

const WishListProvider = ({ children }) => {
	return (
		<WishListContext.Provider
			value={{
				wishlist: "hare krishna",
			}}
		>
			{children}
		</WishListContext.Provider>
	);
};

const useWishListContext = () => {
	return useContext(WishListContext);
};

export { WishListProvider, useWishListContext };
