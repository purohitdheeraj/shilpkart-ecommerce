// import "./mock.css";

import Mockman from "mockman-js";
import { useDocumentTitle } from "../../utils";

export const Mock = () => {
	useDocumentTitle("Mockman");

	return (
		<main className="mock-main">
			<Mockman />;
		</main>
	);
};
