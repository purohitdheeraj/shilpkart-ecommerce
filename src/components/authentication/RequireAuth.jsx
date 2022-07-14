import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const RequireAuth = ({ children }) => {
	const { isLoggedIn } = useAuth();
	let location = useLocation();

	return (
		<>
			{isLoggedIn ? (
				<Outlet/>
			) : (
				<Navigate
					to="/login"
					state={{ from: location }}
					replace
				/>
			)}
		</>
	);
};
