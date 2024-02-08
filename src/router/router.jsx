import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Contacto from "../components/Contacto";
import footer from "../components/footer";

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
      path: "/contacto",
      element: <footer/>,
  },

  ]);

export default router;