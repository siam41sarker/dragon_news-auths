import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import AllNews from "../Pages/AllNews/AllNews";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewDetails from "../Pages/NewDetails/NewDetails";
import PrivateRouter from "./PrivateRouter";
const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <AllNews></AllNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news/:id',
        element: <PrivateRouter>
                <NewDetails></NewDetails>,
        </PrivateRouter>,
        loader: ({ params }) => fetch(` https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/career',
        element: <Career></Career>
    },
    {
        path: "*",
        element: <h2>error</h2>
    }
])

export default Router;
