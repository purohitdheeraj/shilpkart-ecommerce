import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useWishlistContext } from "../../context/wislistContext";
import { CartActions } from "./cartActions";
import "./productCard.css";
import { WishListActions } from "./wishlistActions";
const ProductCard = ({
	product,
	classNameProp,
	cartButtonProp,
	homeSpaProp,
}) => {
	const {
		title,
		price,
		description,
		imgSrc,
		ratings,
		availability,
	} = product;

	const { wishlistArr } = useWishlistContext();

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

					<CartActions
						product={product}
						cartButtonProp={cartButtonProp}
					/>

					<WishListActions product={product} />

					{cartButtonProp && (
						<div className="text-left">
							<div className="quantity">
								Quantity:{" "}
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
					{homeSpaProp ? (
						<NavLink
							to={`./products/${product._id}`}
						>
							<img src={imgSrc} alt={title} />
						</NavLink>
					) : (
						<NavLink to={`./${product._id}`}>
							<img src={imgSrc} alt={title} />
						</NavLink>
					)}

					<div className="badge  badge-top">
						<span>{availability.badge}</span>
					</div>
				</div>
			</li>
		</>
	);
};

export { ProductCard };
