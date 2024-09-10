import { materialApi } from "@models/materials/materialApi.ts";
import { isArrayOfMaterial } from "@models/materials/type.ts";

export const useGetSortedOptions = () => {
  const { data, isLoading, isError, isSuccess } =
    materialApi.useGetMaterialsQuery();

  const materials = isArrayOfMaterial(data) ? data : [];

  const materialOptions = materials.map((material) => ({
    label: material.name,
    value: material.name,
    id: material.id,
  }));

  return {
    materials,
    materialOptions,
    isLoading,
    isError,
    isSuccess,
  };
};
