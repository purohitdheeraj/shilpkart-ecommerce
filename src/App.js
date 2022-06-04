import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Link,
	Navigate,
	useParams,
} from "react-router-dom";

import { products } from "./backend/db/products";
import { newProducts } from "./backend/db/newProducts";

function Home() {
	return <h2>Home Page</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Contact() {
	return <h2>Contact</h2>;
}

function Products() {
	return <h2>Products </h2>;
}

function NotFound() {
	return (
		<>
			<h2>Hey Rama Hey Krishna page not found</h2>
		</>
	);
}

function ProductDetail() {
	let { _id } = useParams();
	// id = Number(id);
	console.log(_id);
	const product = newProducts.find(
		(product) => product._id === _id
	);
	return (
		<div>
			<h3>{product.title}</h3>
			<p>{product.categoryName}</p>
		</div>
	);
}

function ProductList({ products }) {
	return (
		<div>
			<h2>Products</h2>
			<ul>
				{products.map((product) => (
					<li>
						<NavLink to={`./${product._id}`}>
							{product.title}
						</NavLink>
					</li>
				))}
			</ul>

			<Routes>
				<Route
					path=":_id"
					element={<ProductDetail />}
				/>
			</Routes>
		</div>
	);
}

function App() {
	return (
		<Router>
			<div>
				<nav className="navbar ">
					<ul className="navbar-icons list-style-none list-display-inline">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>

						<li>
							<NavLink to="/about">
								About
							</NavLink>
						</li>

						<li>
							<NavLink to="/contact">
								Contact
							</NavLink>
						</li>

						<li>
							<NavLink to="/products">
								Products
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>

			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/products/*"
						element={
							<ProductList
								products={newProducts}
							/>
						}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
