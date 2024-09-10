import { ProductCard } from "@components/product-card/ProductCard.tsx";
import { Navigation } from "@components/navigation/Navigation.tsx";
import cl from "./CategoryItems.module.scss";
import { CustomSelect } from "@components/custom-select/CustomSelect.tsx";
import { useSortedCards } from "@pages/category-items/useSortedCards.ts";

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

const materials = [
  {
    id: "1",
    name: "Дерево",
  },
  {
    id: "2",
    name: "Металл",
  },
] as const;

const materialOptions = materials.map((material) => ({
  label: material.name,
  value: material.name,
  id: material.id,
}));

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

const CategoryItems = () => {
  const {
    sortedByMaterials,
    handleSortChange,
    materialType,
    handleMaterialChange,
    sortType,
    isLoading,
    isError,
  } = useSortedCards(materials);

  return (
    <section className={cl.products}>
      <header className={cl.products__header}>
        <Navigation routes={routes} />
      </header>
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
        {!isLoading && !isError && (
          <ul className={cl.products__list}>
            {sortedByMaterials.map((product) => (
              <li className={cl.products__item} key={product.id}>
                <ProductCard {...product} />
              </li>
            ))}
          </ul>
        )}

        {isLoading && <h1>Загрузка</h1>}
        {isError && <h1>Ошибка загрузки</h1>}
      </div>
    </section>
  );
};

export { CategoryItems };
