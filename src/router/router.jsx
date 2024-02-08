import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Nav from "../components/nav/Nav";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
        path: "/nav",
        element: <Nav/>,
    },
  ]);

export default router;