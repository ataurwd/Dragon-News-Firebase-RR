import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import FIrebaseContext from "./Context/FIrebaseContext";
import News from "./components/News";

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
    }
]);

const App = () => (
    <FIrebaseContext>
        <RouterProvider router={route} />
    </FIrebaseContext>
);

export default App;
