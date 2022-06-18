import React from "react";
import { NavLink } from "react-router-dom";
import { UseCartContext } from "../../context/cartContext";
import { useWishlistContext } from "../../context/wislistContext";
import logo from "./logo.jpg";

const Navbar = () => {
	const { wishlistState } = useWishlistContext();
	const { cart } = UseCartContext();

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
						<small className="text-center">
							SHILPKART शिल्पकार्त
						</small>
					</div>
				</NavLink>
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
									<span className="badge badge-icon badge-status-number">
										{
											wishlistState
												.wishlist
												.length
										}
									</span>
								</div>
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/cart">
							<span>
								<div className="badge__container">
									<i className="fas fa-shopping-cart fa-2x fa-fw"></i>
									<span className="badge badge-icon badge-status-number">
										{cart.length}
									</span>
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
