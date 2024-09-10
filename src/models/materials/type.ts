export type Material = {
  id: string;
  name: string;
};

const isMaterial = (material: any): material is Material =>
  material && material.id && material.name;

export const isArrayOfMaterial = (arr: any): arr is Material[] => {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (!isMaterial(arr[i])) return false;
  }

  return true;
};
