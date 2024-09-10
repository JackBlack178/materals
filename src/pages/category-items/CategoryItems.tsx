import { ProductCard } from "@components/product-card/ProductCard.tsx";
import { Navigation } from "@components/navigation/Navigation.tsx";
import cl from "./CategoryItems.module.scss";
import { CustomSelect } from "@components/custom-select/CustomSelect.tsx";
import { useSortedCards } from "@pages/category-items/useSortedCards.ts";
import { useGetSortedOptions } from "@pages/category-items/useMaterialOptions.ts";
import { store } from "@utils/store.ts";
import { materialApi } from "@models/materials/materialApi.ts";
import { productApi } from "@models/product/productApi.ts";
import { useContext } from "react";
import { UserContext } from "@utils/AuthProvider.tsx";
import { userApi } from "@models/user/userApi.ts";
import { isUser } from "@models/user/type.ts";

const routes = [
  {
    name: "Главная",
    to: "/",
  },
  {
    name: "Системы хранения",
    to: "/category/1",
  },
  {
    name: "Комплект стеллажных систем",
    to: "/category/1/series/1",
  },
];

const sortOptions = [
  {
    value: "desc",
    label: "Цена по убыванию",
  },
  {
    value: "asc",
    label: "Цена по возрастанию",
  },
];

const CategoryItems = () => {
  const {
    materialOptions,
    materials,
    isLoading: isLoadingMaterials,
    isError: isErrorMaterials,
    isSuccess: isSuccessMaterials,
  } = useGetSortedOptions();

  const {
    sortedByMaterials,
    handleSortChange,
    materialType,
    handleMaterialChange,
    sortType,
    isLoading: isLoadingItems,
    isError: isErrorItems,
    isSuccess: isSuccessItems,
  } = useSortedCards(materials);

  const isSuccess = isSuccessMaterials && isSuccessItems;
  const isLoading = isLoadingItems || isLoadingMaterials;
  const isError = isErrorItems || isErrorMaterials;

  const userId = useContext(UserContext);
  const { data } = userApi.useGetUserQuery(userId);
  const user = isUser(data) ? data : null;
  const favorites = user?.favorites;
  const groceryBasket = user?.groceryBasket;

  const [changeFavoriteState] = userApi.useChangeFavoriteStateMutation();
  const [changeGroceryState] = userApi.useChangeGroceryStateMutation();

  const handleHeartClick = (productId: string, newState: boolean) => {
    if (userId && favorites) {
      let newArray = [];
      if (newState) newArray = [...favorites, productId];
      else {
        newArray = [...favorites].filter((id) => id !== productId);
      }

      changeFavoriteState({
        userId,
        newState: newArray,
        productId,
      });
    }
  };

  const handleBasketClick = (productId: string, newState: boolean) => {
    if (userId && groceryBasket) {
      let newArray = [];
      if (newState) newArray = [...groceryBasket, productId];
      else {
        newArray = [...groceryBasket].filter((id) => id !== productId);
      }
      console.log(newArray);

      changeGroceryState({
        userId,
        newState: newArray,
        productId,
      });
    }
  };

  return (
    <section className={cl.products}>
      <header className={cl.products__header}>
        <Navigation routes={routes} />
      </header>
      {isSuccess && (
        <div className={cl.products__body}>
          <h1 className={cl.products__title}>Комплекты стеллажных систем</h1>
          <ul className={cl.products__search_list}>
            <li className={cl.products__search_item}>
              <span className={cl.products__search_text}>Сортировать по:</span>
              <CustomSelect
                handleChange={handleSortChange}
                value={sortType}
                options={sortOptions}
                className={cl.products__search_select}
              />
            </li>
            <li className={cl.products__search_item}>
              <span className={cl.products__search_text}>Сортировать по:</span>
              <CustomSelect
                handleChange={handleMaterialChange}
                value={materialType}
                options={materialOptions}
                className={cl.products__search_select}
              />
            </li>
          </ul>
          <ul className={cl.products__list}>
            {sortedByMaterials.map((product) => (
              <li className={cl.products__item} key={product.id}>
                <ProductCard
                  isSuccess={groceryBasket?.includes(product.id)}
                  handleHeartClick={handleHeartClick}
                  handleBasketClick={handleBasketClick}
                  {...product}
                  isFavorite={favorites?.includes(product.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {isLoading && <h1>Загрузка товаров</h1>}
      {isError && <h1>Произошла ошибка. Проверьте подключение к интернету</h1>}
    </section>
  );
};

export { CategoryItems };

export const categoryItemsPrefetch = ({
  params,
}: {
  params: { id?: string };
}): null => {
  const categoryId = params.id || "";

  store.dispatch(materialApi.util.prefetch("getMaterials", undefined, {}));
  store.dispatch(productApi.util.prefetch("getProducts", categoryId, {}));

  return null;
};
