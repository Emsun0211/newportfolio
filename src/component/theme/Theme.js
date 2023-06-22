import React, { useContext } from "react";
import { VscSymbolColor } from "react-icons/vsc";
import { ThemeManager } from "../../context/ThemeTypes";

function Theme() {
	const { isDarkMode, changeTheme } = useContext(ThemeManager);
	return (
		<div className='theme__changer'>
			<VscSymbolColor
				size={24}
				color={isDarkMode ? "white" : "#1f1f38"}
				onClick={changeTheme}
			/>
		</div>
	);
}

export default Theme;
