import React from "react";
import { useEffect } from "react";

export const HomePage = () => {
	useEffect(() => {
		fetch("/api/products").then((res) =>
			console.log(res.json())
		);
	}, []);

	return <div className="container"></div>;
};
