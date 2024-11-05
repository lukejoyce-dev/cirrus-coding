import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global/GlobalStyles";
import { darkTheme } from "./styles/themes";
import Home from "./pages/Home";
import Meter from "./pages/Meter";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/meter/:id",
    element: <Meter />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
