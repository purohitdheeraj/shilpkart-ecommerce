import { ProductList } from "./ProductList";
import { newProducts } from "../../backend/db/newProducts";
import { ProductDetail } from "./ProductDetail";
import { Routes, Route } from "react-router-dom";

const ProductsPage = () => {
	return (
		<div>
			<ProductList products={newProducts} />
		</div>
	);
};

export { ProductsPage };
