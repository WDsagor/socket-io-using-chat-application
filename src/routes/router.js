import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Chat from "../components/Chat/Chat";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "chat",
      element: <Chat/>,
    },
  ]);

  export default router;
  