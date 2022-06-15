const Login = () => {
	return (
		<>
			<div className="container">
				<main className="main auth-wrapper">
					<div className="modal-wrapper">
						<div
							className="modal modal-login"
							id="loginModal"
						>
							<div className="modal-content">
								<form className="form-field flex-column">
									<h3>SIGN IN</h3>

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
									</div>

									<div className="redirect flex-column">
										<div className="flex-row">
											<input
												type="checkbox"
												id="remember-me"
											/>
											<label
												className="input-label"
												for="remember-me"
											>
												Remember me
											</label>

											<a href="#">
												Forgot Your
												Password ?
											</a>
										</div>

										<a
											href="#signup"
											className="flex-row"
										>
											Create New
											Account
											<span>
												<i className="fa fa-greater-than"></i>
											</span>
										</a>
									</div>

									<input
										type="submit"
										className="btn btn-primary form-submit"
										value="Sign In"
									/>
								</form>
								<span className="close">
									&times;
								</span>
							</div>
						</div>

						{/* <div
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
												I accept all
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
					</div> */}
					</div>
				</main>
			</div>
		</>
	);
};

export { Login };

{
	/* <div className="auth-buttons">
<button
  className="btn btn-primary-outline"
  id="btn-login"
>
  <span>
    <i className="fa fa-sign-in-alt"></i>
  </span>
  Login
</button>

<button
  className="btn btn-primary-outline"
  id="btn-signup"
>
  <span>
    <i className="fa-brands fa-google"></i>
  </span>
  Signup
</button>
</div> */
}
