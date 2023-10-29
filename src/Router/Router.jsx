import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Bookings from "../Pages/Bookings/Bookings";
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
                path: '/checkout/:id',
                loader: ({params}) => fetch(`http://localhost:8080/services/${params.id}`, {credentials:'include'}),
                element: <PrivateRouter><Checkout/></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <SignUp/>
            },
            {
                path: '/bookings',
                element: <PrivateRouter><Bookings/></PrivateRouter>
            }
        ]
    }
])

export default Router;