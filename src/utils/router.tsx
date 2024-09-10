import {
  createBrowserRouter,
  createRoutesFromElements,
  LoaderFunctionArgs,
  Route,
} from "react-router-dom";
import { ProjectLayout, projectLayoutPrefetch } from "@utils/ProjectLayout.tsx";
import { Home } from "@pages/home/Home.tsx";
import {
  CategoryItems,
  categoryItemsPrefetch,
} from "@pages/category-items/CategoryItems.tsx";
import { CategoryList } from "@pages/category-list/CategoryList.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={"/"}
        element={<ProjectLayout />}
        loader={projectLayoutPrefetch}
      >
        <Route index element={<Home />} />
        <Route path={"/category/:id"} element={<CategoryList />} />
        <Route
          path={"/category/:id/series/:id"}
          element={<CategoryItems />}
          loader={(args: LoaderFunctionArgs) =>
            categoryItemsPrefetch({ params: args.params })
          }
        />
      </Route>
    </>,
  ),
);
