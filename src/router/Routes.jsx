import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage";
import CardDetails from "../pages/CardDetails";
import LoginForm from "../pages/LoginForm";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/ContactUs";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch('/cards.json');
          const cards = await response.json();
          return cards.find(card => card.id === params.id);
        }
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <LoginForm></LoginForm>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      }

    ]
  },

]);

