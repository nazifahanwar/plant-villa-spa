import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Loader from "../Components/Loader";
import PrivateRoute from "./PrivateRoute";
import PlantDetails from "../pages/PlantDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement:<div className="min-h-screen bg-base-100 flex justify-center items-center"><p className="text-8xl">404 Error!</p></div>,
    children:[
    {
        index:true,
        Component:Home,
        loader:()=>fetch('/data.json'),
        hydrateFallbackElement:<Loader/>
    },
    {
        path:'/plants',
        Component:Plants,
        loader:()=>fetch('/data.json'),
        hydrateFallbackElement:<Loader/>
    },
    {
        path:'/my-profile',
        element:<PrivateRoute><MyProfile/></PrivateRoute>
    },
    {
        path:'/register',
        Component:Register
    },
    {
        path:'/login',
        Component:LogIn
    },
    {
        path:'/plant-details/:id',
        element:<PrivateRoute><PlantDetails/></PrivateRoute>,
        loader:()=>fetch('/data.json'),
        hydrateFallbackElement:<Loader/>
    }
] },
   
   
]);