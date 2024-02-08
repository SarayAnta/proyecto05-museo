import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
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