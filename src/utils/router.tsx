import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ProjectLayout } from "@utils/ProjectLayout.tsx";
import { CategoryItems } from "@pages/category-items/CategoryItems.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/materials"} element={<ProjectLayout />}>
        <Route index element={<CategoryItems />} />
      </Route>
    </>,
  ),
);
