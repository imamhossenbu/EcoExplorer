import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage";
import CardDetails from "../pages/CardDetails";


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
            path:'/details/:id',
            element:<CardDetails></CardDetails>,
            loader:async ({ params }) => {
                const response = await fetch('/cards.json');
                const cards = await response.json();
                return cards.find(card => card.id === params.id);
            }
        },
        {
            path:'/about',
            element:<About></About>
        }
      ]
    },
    
  ]); 

