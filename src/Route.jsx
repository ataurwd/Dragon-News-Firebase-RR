import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import FIrebaseContext from "./Context/FIrebaseContext";

const Route = () => {

    const route = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/about',
            element: <About/>
        },

    ])
    return (
           <FIrebaseContext>
             <RouterProvider router={route}/>
           </FIrebaseContext>
    );
};

export default Route;