import React from "react";
import { useDocumentTitle } from "../../utils";

export function About() {
	useDocumentTitle("About");
	return (
		<>
			<section className="row">
				<div
					className="project-info flex-column"
					id="About"
				>
					<div className="row flex-column">
						<h2>What is Shilpkart ?</h2>
						<p>
							Shilpkart is a unique platform
							for promoting our great
							Bharatiya Shilpkala and shilpkar
							(master artisans) to the world
							and give them a exclusive
							platform to help them.
						</p>
					</div>

					<div className="row flex-column">
						<h2>
							How unique is Indian Shilpkala ?
						</h2>
						<p>
							The evolution and development of
							Indian sculpture is unique, and
							every period of Indian history
							is reflected through sculpture
							that was created by master
							artisans. Indian sculpture one
							can connect to the historical
							past with authenticity. New
							research on Indus-Sarasvati
							Valley Civilization is
							establishing the continuity
							between Vedic and Indus
							Civilization.
						</p>
					</div>

					<div className="row">
						<p>
							Main Types of Handmade Art
							available on Shilpkart
						</p>
						<ul className="styled-list">
							<li>Wooden Art</li>
							<li>Brass</li>
							<li>Gold</li>
							<li>Silver</li>
							<li>Marble Art</li>
							<li>Stone, Wodden Carvings</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
