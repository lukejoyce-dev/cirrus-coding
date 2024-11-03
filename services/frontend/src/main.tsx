import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Meter from "./pages/Meter";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home page
  },
  {
    path: "/meter/:id",
    element: <Meter />, // Dynamic route for meter details
  },
  {
    path: "*",
    element: <NotFound />, // Catch-all route for 404 Not Found
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
