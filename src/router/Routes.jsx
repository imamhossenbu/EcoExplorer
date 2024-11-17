import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        }
      ]
    },
    
  ]); 

