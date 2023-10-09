import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../components/authentication/Login";
import Home from "../components/home/Home";
import ErrorPage from "../components/shared/ErrorPage";

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
    ],
  },
]);

export default router;
