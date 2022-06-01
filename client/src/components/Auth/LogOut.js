import React from "react";
import "../Layouts/styles/logOut.css";

const LogOut = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main-container">
			<nav className="navbar">
				<button className="btnLogOut" onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default LogOut;
