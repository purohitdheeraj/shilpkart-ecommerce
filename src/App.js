import React from "react";
import Mockman from "mockman-js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { NotFound } from "./NotFound";
import { Navbar } from "./components";
import { Cart, ProductsPage, Wishlist } from "./pages";
import { ProductDetail } from "./pages/Products/ProductDetail";
import { Footer } from "./components";

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
				<Route path="/cart" element={<Cart />} />
				<Route
					path="/wishlist"
					element={<Wishlist />}
				/>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
