import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Articles from './components/Articles';
import ErrorPage from './ErrorPage';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "articles",
                element: <Articles />,
            },
            {
                path: "about",
                element: <About />,
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterProvider router={router} />
    </>
);
