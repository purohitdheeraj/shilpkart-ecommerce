import React from "react";
import Mockman from "mockman-js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import {
	About,
	Cart,
	ProductsPage,
	Signup,
	Wishlist,
	Home,
	// Login,
	NotFound,
	Mock,
	ProductDetail,
} from "./pages";
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
				{/* <Route path="/login" element={<Login />} /> */}
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route path="/mockman" element={<Mock />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
