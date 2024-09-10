import { Outlet } from "react-router-dom";
import { userApi } from "@models/user/userApi.ts";
import { store } from "@utils/store.ts";

const ProjectLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export { ProjectLayout };

export const projectLayoutPrefetch = () => {
  const id = "1";
  store.dispatch(userApi.util.prefetch("getUser", id, {}));
  return null;
};
