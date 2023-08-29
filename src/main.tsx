import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Select from "./pages/select";
import Result from "./pages/result";
import "./index.css";
import Loading from "./pages/loading";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Main /> },
      { path: "select", element: <Select /> },
      { path: "result", element: <Result /> },
      { path: "loading", element: <Loading /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
