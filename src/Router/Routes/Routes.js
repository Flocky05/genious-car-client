import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Orders from "../../Pages/Orders/Orders";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkOut/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            }
        ]
    }
]

)