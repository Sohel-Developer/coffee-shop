import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Details from "../Pages/Details/Details";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";


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
            },
            {
                path: '/update',
                element: <UpdateCoffee />
            }
        ]
    },
]);