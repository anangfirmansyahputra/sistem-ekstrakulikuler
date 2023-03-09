import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Layout, Login } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "dashboard",
                element: <Home />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
