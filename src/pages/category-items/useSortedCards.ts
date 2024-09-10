import { useMemo, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { isArrayOfProducts } from "@models/product/types.ts";
import { Material } from "@models/materials/type.ts";
import { productApi } from "@models/product/productApi.ts";
import { useParams } from "react-router-dom";

export const useSortedCards = (materials: Material[]) => {
  const { id } = useParams();

  const { data, isLoading, isError, isSuccess } =
    productApi.useGetProductsQuery(id as string);
  const products = isArrayOfProducts(data) ? data : [];

  const [sortType, setSortType] = useState<Sort>("asc");
  const [materialType, setMaterial] = useState<MaterialOptions>("Металл");

  type MaterialOptions = (typeof materials)[number]["name"];
  type Sort = "desc" | "asc";

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value as Sort);
  };

  const handleMaterialChange = (event: SelectChangeEvent) => {
    setMaterial(event.target.value as MaterialOptions);
  };

  const sortedByPrice = useMemo(() => {
    const newArr = [...products];
    return newArr.sort((a, b) =>
      sortType === "asc"
        ? b.price.current_price - a.price.current_price
        : a.price.current_price - b.price.current_price,
    );
  }, [sortType, products]);

  const sortedByMaterials = useMemo(() => {
    const materialId = +materials.find((item) => item.name === materialType)
      ?.id!;
    const newArr = [...sortedByPrice]; //Для того, чтобы не вызывать sortedByPrice еще раз

    return newArr.sort((a, b) => compareWithMaterial(a, b, materialId));
  }, [sortedByPrice, materialType]);

  return {
    sortedByMaterials,
    handleSortChange,
    handleMaterialChange,
    sortType,
    materialType,
    isLoading,
    isError,
    isSuccess,
  };
};

function compareWithMaterial(
  a: { material: number },
  b: { material: number },
  materialId: number,
) {
  if (a.material === materialId && b.material === materialId) {
    return -1;
  }

  if (b.material === materialId) {
    return 1;
  }

  return -1;
}
