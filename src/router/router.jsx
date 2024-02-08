import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Addbutton from "../components/button/Button-add/add-button";
import Footer from "./components/footer/Footer.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "/footer",
      element: <Footer/>
    },

    {
      path: "/Addbutton",
      element: <Addbutton/>
    },

  ]);

export default router;