import React from "react";
import { ProductList } from "../../components";
import { useCommonData } from "../../context/dataContext";
import { useDocumentTitle } from "../../utils";
import "./product.css";

const ProductsPage = () => {
	useDocumentTitle("Products");

	const { products } = useCommonData();
	
	return (
		<main className="main prd-main">
			<aside className="prd-aside gray-bg">
				<section className="row">
					<fieldset>
						<legend>Categories:</legend>
						<input
							id="Wooden"
							type="checkbox"
							name="category"
							// value="Wooden"
						/>
						<label htmlFor="Wooden">
							Wooden
						</label>{" "}
						<input
							id="Brass"
							type="checkbox"
							name="category"
							// value="Brass"
						/>
						<label htmlFor="Brass">Brass</label>{" "}
						<input
							id="Gold"
							type="checkbox"
							name="category"
							// value="Gold"
						/>
						<label htmlFor="Gold">Gold</label>{" "}
						<input
							id="Silver"
							type="checkbox"
							name="category"
							// value="Silver"
						/>
						<label htmlFor="Silver">
							Silver
						</label>
					</fieldset>
				</section>

				<section className="row">
					<fieldset>
						<legend>Price</legend>

						<div className="slidecontainer">
							<div className="flex-row">
								<div>1000</div>
								<div>2000</div>
								<div>3000</div>
								<div>4000</div>
								<div>5000</div>
							</div>
							<input
								type="range"
								min="1"
								max="100"
								// value="50"
								className="slider input-field"
							/>
						</div>
					</fieldset>
				</section>

				<section className="row">
					<fieldset>
						<legend>Ratings</legend>
						<div className="star-rating">
							<input
								type="radio"
								id="5-stars"
								name="rating"
								// value="5"
							/>
							<label
								htmlFor="5-stars"
								className="star"
							>
								&#9733;
							</label>
							<input
								type="radio"
								id="4-stars"
								name="rating"
								// value="4"
							/>
							<label
								htmlFor="4-stars"
								className="star"
							>
								&#9733;
							</label>
							<input
								type="radio"
								id="3-stars"
								name="rating"
								// value="3"
							/>
							<label
								htmlFor="3-stars"
								className="star"
							>
								&#9733;
							</label>
							<input
								type="radio"
								id="2-stars"
								name="rating"
								// value="2"
							/>
							<label
								htmlFor="2-stars"
								className="star"
							>
								&#9733;
							</label>
							<input
								type="radio"
								id="1-star"
								name="rating"
								// value="1"
							/>
							<label
								htmlFor="1-star"
								className="star"
							>
								&#9733;
							</label>
						</div>
					</fieldset>
				</section>
			</aside>
			<article className="prd-article gray-bg">
				<ProductList products={products} />
			</article>
		</main>
	);
};

export { ProductsPage };
