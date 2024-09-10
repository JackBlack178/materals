import { RouterProvider } from "react-router-dom";
import { router } from "@utils/router.tsx";
import { Provider } from "react-redux";
import { store } from "@utils/store.ts";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export { App };
