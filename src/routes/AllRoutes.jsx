import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../components/authentication/Login";
import Home from "../components/home/Home";
import ErrorPage from "../components/shared/ErrorPage";
import Store from "../components/allPages/Store";
import Contact from "../components/allPages/Contact";
import AddToy from "../components/allPages/AddToy";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../components/allPages/ToyDetails";

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
        element: <Store></Store>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
