import { NavLink } from "react-router-dom";
import { useDocumentTitle } from "../../utils";

const Login = () => {
	useDocumentTitle("Login");
	return (
		<>
			<main className="container">
				<div className="auth-wrapper">
					<div className="main modal-wrapper">
						<div
							className="modal modal-signup"
							id="signupModal"
						>
							<div class="modal-content">
								<form class="form-field flex-column">
									<h3>SIGN IN</h3>

									<div class="input-wrapper flex-column">
										<label
											class="input-label label-required"
											for="correct-input"
										>
											Email
										</label>

										<input
											class="input-field input-field-unset"
											id="correct-input"
											type="text"
											placeholder="Enter Your Email"
											required
										/>

										<label
											class="input-label label-required"
											for="Email"
										>
											Password
										</label>

										<input
											class="input-field input-field-unset"
											id="correct-input"
											type="password"
											placeholder="*******"
											required
										/>
									</div>

									<div class="redirect flex-column">
										<div class="flex-row">
											<input
												type="checkbox"
												id="remember-me"
											/>
											<label
												class="input-label"
												for="remember-me"
											>
												Remember me
											</label>

											<a>
												Login as a
												Guest
											</a>
										</div>
									</div>

									<input
										type="submit"
										class="btn btn-primary form-submit"
										value="Sign In"
									/>
									<NavLink
										className="text-center"
										to="/signup"
									>
										Create a New Account
										?
									</NavLink>
								</form>
							</div>
						</div>{" "}
					</div>
				</div>
			</main>
		</>
	);
};

export { Login };
