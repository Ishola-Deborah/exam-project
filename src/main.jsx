import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Route } from "react-router-dom";
import { ThemeProvider } from "./context/theme/ThemeContext";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Loader from "./components/loader/Loader"
import App from "./App";
const About = lazy(() => import("./pages/about/About"))
import Repo from "./pages/repo/Repo"
import SingleRepo from "./pages/singleRepo/SingleRepo"

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/About",
        element: <Suspense fallback={Loader}> <About /></Suspense>

      },
      {
        path: "/Repo",
        element: <Suspense fallback={Loader}>
          <Repo />
        </Suspense>
      },
      {
        path: "/Repos/:RepoID",
        element: <Suspense fallback={Loader}>
          <SingleRepo />
        </Suspense>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
