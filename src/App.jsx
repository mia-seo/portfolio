import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/education/:id", element: <Education /> },
      { path: "/project/:projectId", element: <Project /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
