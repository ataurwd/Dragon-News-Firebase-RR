import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Layout from './components/pages/Layout';
import FIrebaseContext from "./components/Context/FIrebaseContext";

const Route = () => {

    const route = createBrowserRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/',
                    element: <Home/>
                }
            ]
        }


    ])
    return (
        <div>
           <FIrebaseContext>
             <RouterProvider router={route}/>
           </FIrebaseContext>
        </div>
    );
};

export default Route;