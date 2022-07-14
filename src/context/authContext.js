import React, {
	createContext,
	useContext,
	useState,
} from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, setIsLoggedIn }}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	return useContext(AuthContext);
};

export { useAuth, AuthProvider };
