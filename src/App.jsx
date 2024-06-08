import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from './pages/loginpage/loginpage'
import TestPage from './pages/testpage/testpage'




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
                }
            ]
        },
    ]);
    return (
        <RouterProvider router={router} />
    );
}