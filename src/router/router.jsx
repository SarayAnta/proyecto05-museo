import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../components/layout";
import Home from "../components/home/Home";
import NewItem from "../components/newitem/NewItem";
import Edit from "../components/edit/Edit";
import Footer from "../components/footer/footer";
import Gallery from "../components/gallery/Gallery";

export const router = createBrowserRouter([
  {
      path: "/",
      element: <LayoutPublic />,
      children: [
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
      path: "/Edit/:id",
      element: <Edit/>
    },
    {
      path: "/Gallery",
      element: <Gallery/>
    }
  ],
  }
  ]);

export default router;