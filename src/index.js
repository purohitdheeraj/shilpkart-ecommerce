import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { WishlistProvider } from "./context/wislistContext";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<WishlistProvider>
				<App />
			</WishlistProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
