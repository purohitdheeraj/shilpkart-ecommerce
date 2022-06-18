import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { WishlistProvider } from "./context/wislistContext";
import { CartProvider } from "./context/cartContext";

const container = document.getElementById("root");

// Call make Server
makeServer();

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Router>
			<CartProvider>
				<WishlistProvider>
					<App />
				</WishlistProvider>
			</CartProvider>
		</Router>
	</React.StrictMode>
);
