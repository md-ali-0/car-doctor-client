import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import PrivateRouter from "./PrivateRouter";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/checkout',
                element: <PrivateRouter><Checkout/></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <SignUp/>
            }
        ]
    }
])

export default Router;