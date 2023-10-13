import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../components/authentication/Login";
import Home from "../components/home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import Store from "../components/allPages/Store";
import Contact from "../components/allPages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "store",
        element: <Store></Store>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ],
  },
]);

export default router;
