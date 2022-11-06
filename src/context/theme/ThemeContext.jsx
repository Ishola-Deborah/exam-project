import { useContext, createContext, useEffect, useReducer } from "react";

const initialTheme = { darkMode: "true" };
const ThemeContext = createContext(null);
const dispatchTheme = createContext(null);

const getStoredTheme = () => {
  return JSON.parse(localStorage.getItem("storedTheme")) || initialTheme;
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useDispatchTheme = () => {
  return useContext(dispatchTheme);
};

export const ThemeProvider = ({ children }) => {
  const [THEME, dispatch] = useReducer(themeReducer, getStoredTheme());

  useEffect(() => {
    localStorage.setItem("storedTheme", JSON.stringify(THEME));
  }, [THEME]);

  return (
    <ThemeContext.Provider value={THEME}>
      <dispatchTheme.Provider value={dispatch}>
        {children}
      </dispatchTheme.Provider>
    </ThemeContext.Provider>
  );
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE": {
      return { darkMode: false };
    }
    case "DARKMODE": {
      return { darkMode: true };
    }
    default:
      return state;
  }
};
