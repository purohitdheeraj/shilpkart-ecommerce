import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
	About,
	Cart,
	ProductsPage,
	Signup,
	Wishlist,
	Home,
	Login,
	NotFound,
	Mock,
	ProductDetail,
	User,
} from "./pages";
import "./App.css";

function App() {
	return (
		<div className="container">
			<Navbar />

			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/products/*"
					element={<ProductsPage />}
				/>
				{/* SPA */}
				<Route
					path="/products/:_id"
					element={<ProductDetail />}
				/>
				<Route path="*" element={<NotFound />} />

				{/* Private Routes */}
				<Route path="/user" element={<User />} />
				<Route path="/cart" element={<Cart />} />
				<Route
					path="/wishlist"
					element={<Wishlist />}
				/>
				<Route path="/login" element={<Login />} />
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
