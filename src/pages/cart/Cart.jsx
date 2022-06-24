import React from "react";

import { UseCartContext } from "../../context/cartContext";
import { useDocumentTitle } from "../../utils";
import "../Products/product.css";
import "./cart.css";
import { NavLink } from "react-router-dom";
import { ProductCard } from "../../components/products/ProductCard";
const Cart = () => {
	useDocumentTitle("Cart");
	const { cart } = UseCartContext();

	return (
		<main className="cart-container">
			<article>
				{cart.length > 0 ? (
					<>
						{cart.map((item) => (
							<ProductCard
								classNameProp="card-horizontal"
								key={item._id}
								product={item}
								cartButtonProp="Remove From Cart"
							/>
						))}
					</>
				) : (
					<span></span>
				)}
			</article>

			<aside className="row cart-info">
				<li className="card card-horizontal text-center">
					<div className="card-text">
						<h6 className="h6">Your Cart</h6>

						<div className="products flex-column">
							{cart.length > 0 ? (
								<>
									{cart.map(
										({
											title,
											price,
											_id,
										}) => (
											<div
												key={_id}
												className="product checkout"
											>
												<p className="name">
													<strong>
														Product
														:{" "}
													</strong>
													{title}
												</p>
												<p className="price">
													<span>
														<strong className="text-left">
															Price:
														</strong>
														{price.toLocaleString(
															"en-IN"
														)}
													</span>

													<span className="text-right">
														1
													</span>
												</p>
											</div>
										)
									)}
									<div className="subtotal">
										<small className="text-left p-md">
											<strong>
												Total:
											</strong>
											<i className="fa fa-inr"></i>
											{cart
												.reduce(
													(
														acc,
														curr
													) =>
														acc +
														curr.price,
													0
												)
												.toLocaleString(
													"en-IN"
												)}
										</small>
									</div>

									<span
										className="btn btn-secondary"
										role="button"
									>
										Checkout
									</span>
								</>
							) : (
								<>
									Cart is empty
									<div className="product">
										<h3>
											{" "}
											Today's Discount
											(5%)
										</h3>
										<NavLink to="/products">
											Buy Now
										</NavLink>
									</div>
									<NavLink
										to="/products"
										className="btn btn-primary-outline"
									>
										Show me Awesome
										Products!
									</NavLink>
								</>
							)}
						</div>
					</div>
				</li>
			</aside>
		</main>
	);
};

export { Cart };
