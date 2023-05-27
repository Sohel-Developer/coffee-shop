import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Details from "../Pages/Details/Details";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addCoffee',
                element: <AddCoffee />
            },
            {
                path: '/details',
                element: <Details />
            }
        ]
    },
]);