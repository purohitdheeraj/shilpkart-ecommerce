const Signup = () => {
	return (
		<>
			<div className="container">
				<main className="main auth-wrapper">
					<div className="modal-wrapper">
						<div
							className="modal modal-signup"
							id="signupModal"
						>
							<div className="modal-content">
								<form className="form-field flex-column">
									<h3>SIGN UP</h3>

									<div className="input-wrapper flex-column">
										<label
											className="input-label label-required"
											for="correct-input"
										>
											Email
										</label>

										<input
											className="input-field input-field-unset"
											id="correct-input"
											type="text"
											placeholder="Enter Your Email"
											required
										/>

										<label
											className="input-label label-required"
											for="Email"
										>
											Password
										</label>

										<input
											className="input-field input-field-unset"
											id="correct-input"
											type="password"
											placeholder="*******"
											required
										/>

										<label
											className="input-label label-required"
											for="Email"
										>
											Confirm Password
										</label>

										<input
											className="input-field input-field-unset"
											id="correct-input"
											type="password"
											placeholder="*******"
											required
										/>
									</div>

									<div className="redirect flex-column">
										<div className="flex-column">
											<div className="flex-row">
												<input
													type="checkbox"
													id="remember-me"
												/>
												<label
													className="input-label"
													for="remember-me"
												>
													I accept
													all
													Terms &
													Conditions
												</label>
											</div>

											<input
												type="submit"
												className="btn btn-primary form-submit"
												value="Sign Up"
											/>
										</div>

										<a
											href="#signup"
											className="flex-row"
										>
											Already have an
											account
											<span>
												<i className="fa fa-greater-than"></i>
											</span>
										</a>
									</div>
								</form>
								<span className="close">
									&times;
								</span>
							</div>
						</div>{" "}
					</div>
				</main>
			</div>
		</>
	);
};

export { Signup };
