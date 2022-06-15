import { useDocumentTitle } from "../../utils";

export function NotFound() {
	useDocumentTitle("Error 404");
	return (
		<>
			<h2>Hey Rama Hey Krishna page not found</h2>
		</>
	);
}
