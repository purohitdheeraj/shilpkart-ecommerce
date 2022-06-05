import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<div>
				<nav className="navbar ">
					<ul className="navbar-icons list-style-none list-display-inline">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>

						<li>
							<NavLink to="/about">
								About
							</NavLink>
						</li>

						<li>
							<NavLink to="/contact">
								Contact
							</NavLink>
						</li>

						<li>
							<NavLink to="/products">
								Products
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export { Navbar };
