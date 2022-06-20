import React from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../utils";
import { cover } from "../../assets/images";
import {
	CategoryCard,
	ProductCard,
} from "../../components";

import { useCommonData } from "../../context/dataContext";

export const Home = () => {
	useDocumentTitle("शिल्पकार्ट");

	const { categories, products } = useCommonData();

	return (
		<div>
			<main className="hm-main gray-bg">
				<section className="row">
					<div className="cover">
						<img src={cover} alt="cover" />
					</div>
				</section>

				<h2 className="row-heading text-center">
					Popular Categories
				</h2>

				<section className="row">
					<div className="categories card-container">
						{categories &&
							categories.map((item) => (
								<CategoryCard
									key={item._id}
									category={item}
								/>
							))}
					</div>
				</section>

				<h2 className="row-heading text-center">
					New Products
				</h2>
				<section className="row new-products">
					<article className="prd-article flex-column">
						<ul className="card-container list-style-none ">
							{products &&
								products.map((item) => (
									<ProductCard
										key={item._id}
										product={item}
										homeSpaProp="products"
									/>
								))}
						</ul>

						<p className="text-center">
							<Link
								to="/products"
								className="btn btn-secondary-outline"
							>
								View All Products
							</Link>
						</p>
					</article>
				</section>
			</main>
		</div>
	);
};
