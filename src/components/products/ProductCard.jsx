import React from "react";
import { NavLink } from "react-router-dom";

import { CartActions } from "./cartActions";
import "./productCard.css";
import { WishListActions } from "./wishlistActions";
const ProductCard = ({ product, classNameProp }) => {
	const {
		_id,
		title,
		price,
		description,
		imgSrc,
		ratings,
		availability,
	} = product;

	return (
		<>
			<li
				className={`${classNameProp} card text-center`}
			>
				<div className="card-text">
					<h6 className="h6">{title}</h6>

					<p className="p-sm text-left">
						{description}
					</p>

					<CartActions product={product} classNameProp={classNameProp} />

					<WishListActions product={product} />

					{classNameProp && (
						<div className="text-left">
							<div className="quantity">
								Quantity:
								<span>
									<input
										className="input-field"
										type="number"
									/>
								</span>
							</div>
						</div>
					)}

					<div className="text-left ">
						<h4>Price:</h4> {"  "}
						<span className="p-sm">
							<i className="fa fa-inr"></i>
						</span>
						<span className="price-tag">
							{price.toLocaleString("en-IN")}
							/-
						</span>
					</div>

					<span className="text-right high">
						{ratings}
					</span>
				</div>
				<div className="card-cover badge-container">
					<NavLink to={`/products/${_id}`}>
						<img src={imgSrc} alt={title} />
					</NavLink>

					<div className="badge  badge-top">
						<span>{availability.badge}</span>
					</div>
				</div>
			</li>
		</>
	);
};

export { ProductCard };
