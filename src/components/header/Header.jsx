import { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import image from "../../assets/demo.jpg";
import {
  useThemeContext,
  useDispatchTheme,
} from "../../context/theme/ThemeContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const THEME = useThemeContext();
  const DARKMODE = THEME.darkMode;

  const displayMenu = () => {
    setShowMenu(!showMenu);
  };

  const HideMenuOnLinkClicked = () => {
    setShowMenu(false);
  };

  const navBarLimit = window.matchMedia("(max-width:600px)");
  navBarLimit.addEventListener("change", () => {
    if (navBarLimit.matches) {
      setShowMenu(false);
    }
  });

  const dispatch = useDispatchTheme();

  const setLightMode = () => {
    dispatch({
      type: "LIGHTMODE",
    });
  };

  const setDarkMode = () => {
    dispatch({
      type: "DARKMODE",
    });
  };

  let activeStyle = {
    borderBottom: "2px solid lightblue"
  };

  return (
    <header className={DARKMODE ? "" : "light"}>
      <div className={DARKMODE ? "brand" : "brand "}>dev Debby</div>
      <ul className={showMenu ? "navActive" : ""} >
        <li>
          <NavLink to={"/Repo"} onClick={HideMenuOnLinkClicked} >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/About"} onClick={HideMenuOnLinkClicked}style={({ isActive }) => isActive ? activeStyle : undefined} >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Repo"} onClick={HideMenuOnLinkClicked} style={({ isActive }) => isActive ? activeStyle : undefined}>
            Repo
          </NavLink>
        </li>
        <li>
          <img src={image} alt="" />
        </li>
      </ul>

      <div className="themeSwitcher">
        {!DARKMODE && (
          <span onClick={setDarkMode} className="material-symbols-outlined">
            dark_mode
          </span>
        )}
        {DARKMODE && (
          <span onClick={setLightMode} className="material-symbols-outlined">
            light_mode
          </span>
        )}
      </div>

      <div className="menuBar" onClick={displayMenu}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
};

export default Header;
