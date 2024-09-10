import { RouterProvider } from "react-router-dom";
import { router } from "@utils/router.tsx";

const App = () => {
  return <RouterProvider router={router} />;
};

export { App };
