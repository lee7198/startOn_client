import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Select from "./pages/select";
import Result from "./pages/result";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Main /> },
      { path: "select", element: <Select /> },
      { path: "result", element: <Result /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
