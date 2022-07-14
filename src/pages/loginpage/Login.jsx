import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../utils";

export const Login = () => {
	useDocumentTitle("Login");
	let Navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		if (
			email === "purohitdheeraj@gmail.com" &&
			password === "654321"
		) {
			Navigate("/user");
			setError(false);
			console.log("Success");
		} else {
			setError(
				"wrong values there's a problem in logging In"
			);
		}
	};

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
								<form
									onSubmit={submitHandler}
									className="form-field flex-column"
								>
									<h3>SIGN IN</h3>

									<div className="input-wrapper flex-column">
										<label
											className="input-label label-required"
											htmlFor="correct-input"
										>
											Email
										</label>

										<input
											className="input-field input-field-unset"
											type="text"
											placeholder="Enter Your Email"
											onChange={(e) =>
												setEmail(
													e.target
														.value
												)
											}
											required
										/>

										<label
											className="input-label label-required"
											htmlFor="Email"
										>
											Password
										</label>

										<input
											className="input-field input-field-unset"
											id="correct-input"
											type="password"
											onChange={(e) =>
												setPassword(
													e.target
														.value
												)
											}
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
												htmlFor="remember-me"
											>
												Remember me
											</label>

											<a href="google.com">
												Login as a
												Guest
											</a>
										</div>
									</div>

									<input
										type="submit"
										className="btn btn-primary form-submit"
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
								{error && <p> {error}</p>}
							</div>
						</div>{" "}
					</div>
				</div>
			</main>
		</>
	);
};
