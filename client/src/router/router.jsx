import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import HomePage from "../pages/home";
import SignUp from "../Registration/SignUp/SignUp";
import SignIn from "../Registration/SignIn/SignIn";
import NewPole from "../pages/NewPole/NewPole";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/new-pole",
        element: <NewPole />,
      },
    ],
  },
]);

export default router;
