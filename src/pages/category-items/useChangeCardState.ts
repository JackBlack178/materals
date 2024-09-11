import { useState } from "react";

export const useChangeCardState = () => {
  const [favorites, setFavorites] = useState<string[]>(() =>
    getArrayFromLocalStorage<string>("favorites"),
  );
  const [groceryBasket, setGroceryBasket] = useState<string[]>(() =>
    getArrayFromLocalStorage<string>("grocery_basket"),
  );

  const handleHeartClick = (productId: string, newState: boolean) => {
    const newArray = changeIdStateInArray(favorites, productId, newState);
    localStorage.setItem("favorites", JSON.stringify(newArray));
    setFavorites(newArray);
  };
  const handleBasketClick = (productId: string, newState: boolean) => {
    const newArray = changeIdStateInArray(groceryBasket, productId, newState);
    localStorage.setItem("grocery_basket", JSON.stringify(newArray));
    setGroceryBasket(newArray);
  };

  return { handleBasketClick, handleHeartClick, favorites, groceryBasket };
};

function getArrayFromLocalStorage<T>(key: string): T[] {
  const storedValue = localStorage.getItem(key);

  if (storedValue) {
    try {
      const parsedValue: T[] = JSON.parse(storedValue);
      return Array.isArray(parsedValue) ? parsedValue : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return [];
    }
  }

  return [];
}

function changeIdStateInArray(
  arrOfIds: string[],
  productId: string,
  newState: boolean,
) {
  let newArray = [];
  if (newState) newArray = [...arrOfIds, productId];
  else {
    newArray = [...arrOfIds].filter((id) => id !== productId);
  }
  return newArray;
}
