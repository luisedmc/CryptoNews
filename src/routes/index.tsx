import { createBrowserRouter } from "react-router-dom"
import { App } from "../App"
// import { ErrorPage } from "./pages/ErrorPage"
import Crypto from "../pages/Crypto"
import Cryptos from "../pages/Cryptos"
import Articles from "../pages/Articles"
import Article from "../pages/Article"
import { About } from "../pages/About"

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
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
