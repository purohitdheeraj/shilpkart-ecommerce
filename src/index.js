import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { WishlistProvider } from "./context/wislistContext";
import { CartProvider } from "./context/cartContext";
import { CommonDataProvider } from "./context/dataContext";
import { AuthProvider } from "./context/authContext";

const container = document.getElementById("root");

// Call make Server
makeServer();

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<CommonDataProvider>
					<CartProvider>
						<WishlistProvider>
							<App />
						</WishlistProvider>
					</CartProvider>
				</CommonDataProvider>
			</AuthProvider>
		</Router>
	</React.StrictMode>
);
