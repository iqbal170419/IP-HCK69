import React from "react";
import { createBrowserRouter } from "react-router-dom";

// import Homey from "../pages/Homey";
import Home from "../pages/Home";
import AllGame from "../pages/AllGame";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { GameId } from "../pages/GameId";
import YourGame from "../pages/YourGame";
import DetailPage from "../pages/Detail";
import Favorite from "../pages/Favorite";


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
    },
    {
        path: "/game/:id",
        element: <DetailPage />,
    },
    {
        path: "/favorite",
        element: <Favorite />,
    },

]);

export default Routers