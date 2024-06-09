import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from './pages/loginpage/loginpage'
import TestPage from './pages/testpage/testpage'
import MainPage from './pages/main/mainpage'




export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            children: [
                {
                    path: "/",
                    element: <LoginPage />
                },
                {
                    path: "/test",
                    element: <TestPage />
                },
                {
                    path: "/main",
                    element: <MainPage />
                }
            ]
        },
    ]);
    return (
        <RouterProvider router={router} />
    );
}