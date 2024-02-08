import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Nav from "../components/nav/Nav";
import Home from "../components/Home";
import Addbutton from "../components/button/Button-add/add-button";
import NewItem from "../components/newitem/NewItem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "/NewItem",
      element: <NewItem/>,
    },
  ]);

export default router;