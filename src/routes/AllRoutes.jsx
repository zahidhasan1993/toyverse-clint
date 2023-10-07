import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../components/authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: 'login',
    element: <Login></Login>
  }
]);

export default router;
