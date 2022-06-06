const Footer = () => {
	return (
		<footer className="footer text-center flex-row">
			<p className="p-sm">
				Made with{" "}
				<a href="https://inclusive-ui.netlify.app/">
					<span className="primary-color">
						Inclusive UI
					</span>
				</a>
			</p>
			<nav>
				<ul className="flex-row">
					<li>
						<a
							href="https://www.linkedin.com/in/dheeraj-purohit-79ba4a168"
							target="_blank"
						>
							<span
								className="fab fa-linkedin fa-2x"
								aria-hidden="true"
							></span>
							<span className="sr-only">
								LinkedIn
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://twitter.com/the_indianyoga"
							target="_blank"
						>
							<span
								className="fab fa-twitter fa-2x"
								aria-hidden="true"
							></span>
							<span className="sr-only">
								Twitter
							</span>
						</a>
					</li>

					<li>
						<a
							href="https://github.com/purohitdheeraj"
							target="_blank"
						>
							<span
								className="fab fa-github fa-2x"
								aria-hidden="true"
							></span>
							<span className="sr-only">
								Github
							</span>
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export { Footer };
