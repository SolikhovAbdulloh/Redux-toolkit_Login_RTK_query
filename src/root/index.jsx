import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/home";
import Userpage from "../pages/Userpage";

export const root = createBrowserRouter([
    {
        path:'/',
        element:<LoginPage/>
    },
    {
        path:'/userpage',
        element:<Userpage/>
    }
])