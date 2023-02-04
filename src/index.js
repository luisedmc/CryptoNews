import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import About from "./pages/About"
import Article from "./pages/Article"
import Articles from "./pages/Articles"
import Crypto from "./pages/Crypto"
import Cryptos from "./pages/Cryptos"
import ErrorPage from "./ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "cryptos",
        element: <Cryptos />,
      },
      {
        path: "cryptos/:cryptoId",
        element: <Crypto />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "articles/:id",
        element: <Article />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <RouterProvider router={router} />
  </>
)
