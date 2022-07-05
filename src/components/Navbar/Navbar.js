import React from "react";
import { NavLink } from "react-router-dom";
import { UseCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wislistContext";
import logo from "./logo.jpg";

const Navbar = () => {
	const { wishlistArr } = useWishlistContext();
	const { cart } = UseCartContext();

	const wishlistBadge = wishlistArr.length > 0 && (
		<span className="btn-primary badge badge-icon badge-status-number">
			{wishlistArr.length}
		</span>
	);

	const cartBadge = cart.length > 0 && (
		<span className="btn-primary badge badge-icon badge-status-number">
			{cart.length}
		</span>
	);

	return (
		<nav className="navbar ">
			<div className="navbar-left">
				<NavLink to="/">
					<div className="navbar-logo">
						<img
							className="responsive-image round-image"
							src={logo}
							alt=""
						/>
					</div>
				</NavLink>
				<small className="text-center">
					SHILPKART | शिल्पकार्त
				</small>
			</div>
			<div className="navbar-right">
				<ul className="navbar-icons list-style-none list-display-inline flex-row">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>

					<li>
						<NavLink to="/about">About</NavLink>
					</li>

					<li>
						<NavLink to="/products">
							Products
						</NavLink>
					</li>

					<li>
						<NavLink to="/login">
							<span>
								<i className="fa fa-user fa-2x fa-fw"></i>
							</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="/wishlist">
							<span>
								<div className="badge__container">
									<i className="fa fa-heart fa-2x fa-fw"></i>
									{wishlistBadge}
								</div>
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/cart">
							<span>
								<div className="badge__container">
									<i className="fas fa-shopping-cart fa-2x fa-fw"></i>
									{cartBadge}
								</div>
							</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export { Navbar };
