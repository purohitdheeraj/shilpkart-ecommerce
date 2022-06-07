import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { WishListProvider } from "./context/wislistContext";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<WishListProvider>
				<App />
			</WishListProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
