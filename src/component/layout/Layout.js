import React, { useContext } from "react";
import { ThemeManager } from "../../context/ThemeTypes";

function Layout({ children }) {
	const { isDarkMode } = useContext(ThemeManager);
	return (
		<div className={isDarkMode ? "body-inner" : "body__inner_light"}>
			{children}
		</div>
	);
}

export default Layout;
