import { useReducer } from "react";
import { themeReducer } from "./ThemeReducer";
import { ThemeManager } from "./ThemeTypes";

import { CHANGE_THEME } from "./ThemeTypes";

export const ThemeState = ({ children }) => {
	const initialState = {
		isDarkMode: true,
	};

	const [state, dispatch] = useReducer(themeReducer, initialState);

	const changeTheme = (theme) => {
		dispatch({ type: CHANGE_THEME, payload: theme });
	};

	return (
		<ThemeManager.Provider
			value={{
				isDarkMode: state.isDarkMode,
				changeTheme,
			}}>
			{children}
		</ThemeManager.Provider>
	);
};
