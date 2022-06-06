import { NavLink } from "react-router-dom";
import logo from "./logo.jpg";

const Navbar = () => {
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
				<ul className="navbar-icons list-style-none list-display-inline">
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
						<NavLink to="/user">
							<span>
								<i className="fas fa-user "></i>
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/wishlist">
							<span>
								<i className="fas fa-heart"></i>
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/cart">
							<span>
								<i className="fas fa-shopping-cart"></i>
							</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export { Navbar };
