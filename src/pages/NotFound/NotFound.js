import { useDocumentTitle } from "../../utils";
import React from "react";
export function NotFound() {
	useDocumentTitle("Error 404");
	return (
		<>
			<h2>Hey Rama Hey Krishna page not found</h2>
		</>
	);
}
