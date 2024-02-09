import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import NewItem from "../components/newitem/NewItem";
import Edit from "../components/edit/edit";

import Footer from "../components/footer/Footer";

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
      path: "/NewItem",
      element: <NewItem/>,
    },
    {
      path: "/Edit",
      element: <Edit/>
    },
  ]);

export default router;