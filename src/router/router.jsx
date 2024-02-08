import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Addbutton from "../components/button/Button-add/add-button";
import Footer from "../components/footer/footer";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "/Addbutton",
      element: <Addbutton/>
    },

    {
      path: "/footer",
      element: <Footer/>
    },

  ]);

export default router;