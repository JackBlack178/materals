export type Product = {
  id: string;
  name: string;
  code: string | null;
  price: {
    old_price: number | null;
    current_price: number;
  };
  image: {
    url: string;
  };
  material: number;
};

const isProduct = (obj: any): obj is Product => {
  return (
    obj &&
    obj.hasOwnProperty("id") &&
    obj.hasOwnProperty("name") &&
    obj.hasOwnProperty("code") &&
    obj.hasOwnProperty("price") &&
    obj.hasOwnProperty("material")
  );
};

export const isArrayOfProducts = (arr: any): arr is Product[] => {
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (!isProduct(arr[i])) return false;
  }

  return true;
};
