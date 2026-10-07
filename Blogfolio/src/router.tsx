import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    //   {
    //     path: "projects",
    //     element: <Projects />,
    //   },
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    ],
  },
]);