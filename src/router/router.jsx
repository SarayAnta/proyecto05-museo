import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import NewItem from "../components/newitem/NewItem";
import Edit from "../components/edit/edit";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
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