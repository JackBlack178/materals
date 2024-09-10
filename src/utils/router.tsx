import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ProjectLayout } from "@utils/ProjectLayout.tsx";
import { Home } from "@pages/home/Home.tsx";
import { CategoryItems } from "@pages/category-items/CategoryItems.tsx";
import { CategoryList } from "@pages/category-list/CategoryList.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<ProjectLayout />}>
        <Route index element={<Home />} />
        <Route path={"/category/:id"} element={<CategoryList />} />
        <Route path={"/category/:id/series/:id"} element={<CategoryItems />} />
      </Route>
    </>,
  ),
);
