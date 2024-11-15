import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from '../pages/About';
import FIrebaseContext from "../Context/FIrebaseContext";
import News from "../components/News";
import AuthLayout from '../Layout/AuthLayout';
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import { Toaster } from "react-hot-toast";
import NewsDetails from "../components/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: "", 
                element: <Navigate to="/category/01" replace />
            },
            {
                path: "/category/:id",
                loader: ({ params }) => 
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element: <News />
            }
        ]
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/news/:id',
        loader: ({ params }) => 
            fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        element: <PrivateRoutes>
                    <NewsDetails/>
                </PrivateRoutes>
    },
    {
        path:'/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/signup',
                element: <Register/>
            }
        ]
    }
]);

const App = () => (
    <FIrebaseContext>
        <RouterProvider router={route} />
        <Toaster/>
    </FIrebaseContext>
);

export default App;
