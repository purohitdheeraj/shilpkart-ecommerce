import React from "react";
import Mockman from "mockman-js";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
} from "react-router-dom";

import { products } from "./backend/db/products";

import { Home } from "./Home";
import { About } from "./About";

import { NotFound } from "./NotFound";
import { Navbar } from "./components";
import { ProductList } from "./pages/Products/ProductList";
import { ProductsPage } from "./pages";
import { ProductDetail } from "./pages/Products/ProductDetail";

function App() {
	return (
		<div className="container">
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/products/*"
					element={<ProductsPage />}
				/>
				{/* <Route
					path="/products/*"
					element={
						<ProductList
							products={newProducts}
						/>
					}
				/> */}

				<Route
					path="/products/:_id"
					element={<ProductDetail />}
				/>
				<Route path="*" element={<NotFound />} />
				<Route
					path="/mockapi"
					element={<Mockman />}
				/>
			</Routes>
		</div>
	);
}

export default App;
