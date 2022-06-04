import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	useParams,
} from "react-router-dom";
import { HomePage } from "./home/HomePage";

export const Header = () => {
	return (
		<div>
			<Router>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/products">
						Products
					</NavLink>
				</nav>

				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
				</Routes>
			</Router>
		</div>
	);
};
