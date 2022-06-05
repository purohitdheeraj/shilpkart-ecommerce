import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
	const { title, price, description, imgSrc, ratings } =
		product;
	return (
		<>
			<li className="card text-center">
				<div className="card-text">
					<h6 className="h6">
						<NavLink to={`./${product._id}`}>
							{product.title}
						</NavLink>
					</h6>

					<p className="p-sm text-left">
						{description}
					</p>

					<button
						className="btn btn-primary"
						role="button"
					>
						Add To Cart
					</button>
					<a
						className="btn btn-primary-outline"
						role="button"
					>
						Add To Wishlist
					</a>

					<div className="text-left">
						Price:{" "}
						<a href="#">
							<i className="fa fa-rupee"></i>
						</a>
						<span className="price-tag">
							{price}/-
						</span>
					</div>
					<div className="text-right">
						{ratings}
					</div>
				</div>
				<div className="card-cover badge-container">
					<img src={imgSrc} alt={title} />
					<div className="badge badge-top">
						New
					</div>
				</div>
			</li>
		</>
	);
};

export { ProductCard };
