import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../pages/Dasboard"
import Projects from "../pages/Projects"
import Skills from "../pages/Skills"
import Blogs from "../pages/Blogs"
import Setting from "../pages/Setting"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"
import AuthLayout from "../layout/AuthLayout"
import MainLayout from "../layout/MainLayout"

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ]
    },

    {
        path: "/dashboard",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "skills",
                element: <Skills />,
            },
            {
                path: "blogs",
                element: <Blogs />,
            },
            {
                path: "setting",
                element: <Setting />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
])

export default router