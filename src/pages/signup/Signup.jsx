import { NavLink } from "react-router-dom";
import { useDocumentTitle } from "../../utils";
import React from "react";
const Signup = () => {
	useDocumentTitle("Signup");
	return (
		<>
			<main className="container">
				<div className="auth-wrapper">
					<div className="main modal-wrapper">
						<div
							className="modal modal-signup"
							id="signupModal"
						>
							<div className="modal-content">
								<form className="form-field flex-column">
									<h3>SIGN UP</h3>

									<div className="input-wrapper flex-column">
										<label className="input-label label-required">
											Name
										</label>

										<input
											className="input-field input-field-unset"
											type="text"
											placeholder="Enter Your Name"
											required
										/>

										<label className="input-label label-required">
											Email
										</label>

										<input
											className="input-field input-field-unset"
											type="email"
											placeholder="purohitdheeraj@gmail.com"
											required
										/>

										<label className="input-label label-required">
											Password
										</label>

										<input
											className="input-field input-field-unset"
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

										<NavLink
											className="text-center"
											to="/login"
										>
											Already have an
											account ?
										</NavLink>
									</div>
								</form>
							</div>
						</div>{" "}
					</div>
				</div>
			</main>
		</>
	);
};

export { Signup };
