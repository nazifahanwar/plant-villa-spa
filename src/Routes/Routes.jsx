import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Loader from "../Components/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
    {
        index:true,
        Component:Home,
        loader:()=>fetch('/data.json'),
        hydrateFallbackElement:<Loader/>
    },
    {
        path:'/plants',
        Component:Plants
    },
    {
        path:'/my-profile',
        Component:MyProfile
    },
    {
        path:'/register',
        Component:Register
    },
    {
        path:'/login',
        Component:LogIn
    }
] },
   
   
]);