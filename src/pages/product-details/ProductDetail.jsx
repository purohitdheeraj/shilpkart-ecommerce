import React from "react";
import { useParams } from "react-router-dom";
import { CartActions } from "../../components/products/cartActions";
import { WishListActions } from "../../components/products/wishlistActions";
import { useCommonData } from "../../context/dataContext";
import "./productdetails.css";

export function ProductDetail() {
	const { products } = useCommonData();

	let { _id } = useParams();

	const product = products.find(
		(product) => product._id === _id
	);

	return (
		<article className="spa-container flex-row">
			<div className="spa-cover">
				<img
					src={product.imgSrc}
					alt={product.title}
				/>
			</div>

			<div className="spa-info">
				<div>
					<ul className="list-style-none">
						<li>Title:{product.title}</li>
						<li>Brand:{product.brand}</li>
						<li>
							Availability:
							{product.availability.status
								? "Instock"
								: "Out of Stock"}
						</li>
						<li>Price:{product.price}</li>
						<li>
							Description :{" "}
							{product.description}
						</li>
					</ul>
				</div>

				<div className="quantity">
					Quantity:{" "}
					<span>
						<input
							className="input-field"
							type="number"
						/>
					</span>
				</div>

				<div className="spa-actions cta_buttons">
					<CartActions product={product} />
					<WishListActions product={product} />
				</div>
			</div>
		</article>
	);
}
