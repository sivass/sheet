import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import GuestLayout from "./components/layout/GuestLayout";
import { Login } from "./view/Login";
import { Signup } from "./view/Signup";
import Dashboard from "./view/Dashboard";
import Cms from "./view/Cms";
import Product from "./view/Product";
import Customer from "./view/Customer";
import Support from "./view/Support";
import { Forget } from "./view/Forget";
import Profile from "./view/account/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" />
            },
            
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/cms',
                element: <Cms />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/customer',
                element: <Customer />
            },
            {
                path: '/support',
                element: <Support />
            }, 
            {
                path: '/profile',
                element: <Profile />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login /> 
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/forget',
                element: <Forget />
            }
        ]
    }
]);

export default router;