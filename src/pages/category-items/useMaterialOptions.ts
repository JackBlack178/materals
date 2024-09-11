import { isArrayOfMaterial, Material } from "@models/materials/type.ts";
import { useEffect, useState } from "react";
import { materials as items } from "../../../constants.ts";

export const useGetSortedOptions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<Material[]>([]);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      try {
        setData(items);
        setIsSuccess(true);
      } catch {
        setIsSuccess(false);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, []);

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
