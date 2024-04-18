import React from "react";
import { createBrowserRouter } from "react-router-dom";

// import Homey from "../pages/Homey";
import Home from "../pages/Home";
import AllGame from "../pages/AllGame";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { GameId } from "../pages/GameId";
import YourGame from "../pages/YourGame";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }, 
    {
        path: "/Games",
        element: <AllGame />,
    },
    {
        path: "/Games/:id",
        element: <GameId />,
    },
    {
        path: "/YourGame",
        element: <YourGame />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
    {
        path: "/Login",
        element: <Login />,
    }
]);

export default Routers