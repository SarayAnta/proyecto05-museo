import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import NewItem from "../components/newitem/NewItem";
import Edit from "../components/edit/edit";

import Footer from "../components/footer/Footer";
import Gallery from "../components/galery/Galery";

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
<<<<<<< HEAD
      path: "/Edit",
      element: <Edit/>
    },
=======
      path: "/Gallery",
      element: <Gallery/>
    }
>>>>>>> feature/home
  ]);

export default router;