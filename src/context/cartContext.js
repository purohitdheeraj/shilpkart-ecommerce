import React, {
	createContext,
	useContext,
	useReducer,
} from "react";
import { CartReducer } from "../reducer";

const initialState = {
	cart: localStorage.getItem("cart")
		? JSON.parse(localStorage.getItem("cart"))
		: [],
};

const CartContext = createContext();

const UseCartContext = () => {
	return useContext(CartContext);
};

const CartProvider = ({ children }) => {
	const [cartState, dispatchToCart] = useReducer(
		CartReducer,
		initialState
	);

	const valueProvider = {
		cart: cartState.cart,
		dispatchToCart,
	};

	return (
		<CartContext.Provider value={valueProvider}>
			{children}
		</CartContext.Provider>
	);
};

export { UseCartContext, CartProvider };
