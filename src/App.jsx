import { useEffect } from "react"
import Loader from "./components/loader/Loader";
import Header from "./components/header/Header";
import "./App.css";
import {
  useThemeContext,
  useDispatchTheme,
} from "./context/theme/ThemeContext";
import { Outlet, useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/Repo")
  }, [])

  const THEME = useThemeContext();
  const DARKMODE = THEME.darkMode;

  return (
    <div className="App">
      <>
        <Header />
      </>
      <main className={DARKMODE ? "dark" : "light"}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
