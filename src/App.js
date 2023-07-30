import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Thoughts from "./Thoughts";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/thoughts",
          element: <Thoughts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
