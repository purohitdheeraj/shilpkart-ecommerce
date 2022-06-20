import React, { createContext, useContext } from "react";
import { categories } from "../backend/db/categories";
import { products } from "../backend/db/products";

const initialData = {
	categories,
	products,
};

const DataContext = createContext(initialData);

const useCommonData = () => useContext(DataContext);

const CommonDataProvider = ({ children }) => {
	return (
		<DataContext.Provider value={initialData}>
			{children}
		</DataContext.Provider>
	);
};

export { CommonDataProvider, useCommonData };
