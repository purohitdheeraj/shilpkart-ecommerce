import React from "react";
import { ProductCard } from "../../components";
import { UseCartContext } from "../../context/cartContext";
import { useDocumentTitle } from "../../utils";
import "../Products/product.css";

const Cart = () => {
	useDocumentTitle("Cart");
	const { cart } = UseCartContext();
	console.log(cart);
	return (
		<div className="flex-row">
			<article className="prd-article">
				<ul className="card-container">
					{cart.length > 0 ? (
						<>
							{cart.map((item) => (
								<ProductCard
									key={item._id}
									product={item}
									cartButtonProp="Remove From Cart"
								/>
							))}
						</>
					) : (
						"Aiyo! Add re something to cart why empty empty scrolling our shop"
					)}
				</ul>
			</article>
			<aside className="row cart-info">
				<li className="card card-horizontal text-center">
					<div className="card-text">
						<h6 className="h6">Your Cart</h6>

						<div className="products flex-column">
							<div className="product">
								<span className="name">
									Shri Ganesh Idol
								</span>
								<span className="price">
									40,000/-
									<strong>X</strong>1
								</span>
							</div>

							<div className="product">
								<span className="name">
									Mata Saraswati Idol
								</span>
								<span className="price">
									50,000/-
									<strong>X</strong>1
								</span>
							</div>

							<div className="product">
								<span className="name">
									Shri Venkateswara
								</span>
								<span className="price">
									400,000/-
									<strong>X</strong>1
								</span>
							</div>

							<div className="product">
								<span>Discount (5%)</span>

								<span>- 24,500/-</span>
							</div>
						</div>

						<div className="subtotal">
							<small className="text-left p-md">
								<strong>Sub Total:</strong>
								<i className="fa fa-rupee"></i>
								465,500/-
							</small>
						</div>

						<span
							className="btn btn-secondary"
							role="button"
						>
							Checkout
						</span>
					</div>
				</li>
			</aside>
		</div>
	);
};

export { Cart };
