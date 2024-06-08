import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from './pages/connectpage/connectpage.jsx'
import ErrorPage from './pages/main/main.jsx'
import NotFoundPage from './pages/main/main.jsx'
import NotificationsPage from './pages/main/main.jsx'




export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/*",
                    element: <NotFoundPage />
                },
                {
                    path: "/",
                    element: <MainPage />
                },
                {
                    path: "/main",
                    element: <NotificationsPage />
                }
            ]
        },
    ]);
    return (
        <RouterProvider router={router} />
    );
}