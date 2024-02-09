import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import NewItem from "../components/newitem/NewItem";
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
      path: "/Gallery",
      element: <Gallery/>
    }
  ]);

export default router;