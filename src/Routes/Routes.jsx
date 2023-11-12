import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Details from "../Pages/Details/Details";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import NotFound from "../Shared/NotFound/NotFound";


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
                path: '/coffee/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`https://coffee-shop-server-one.vercel.app/coffee/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`https://coffee-shop-server-one.vercel.app/coffee/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
]);