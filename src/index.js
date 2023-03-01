import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import Credits from "./pages/credits";
import Organ from "./pages/organ";
import Partic from "./pages/partic";
import { createHashRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "credits",
    element: <Credits />,
  },
  {
    path: "Organizers",
    element: <Organ />,
  },
  {
    path: "Participants",
    element: <Partic />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
