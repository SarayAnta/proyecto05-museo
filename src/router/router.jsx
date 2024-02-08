import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Contacto from "../components/Contacto";
import NewItem from "../components/newitem/NewItem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
        path: "/contacto",
        element: <Contacto/>,
    },

    {
      path: "/NewItem",
      element: <NewItem/>,
    },
  ]);

export default router;