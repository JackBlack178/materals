import { useContext } from "react";
import { UserContext } from "@utils/AuthProvider.tsx";
import { userApi } from "@models/user/userApi.ts";
import { isUser } from "@models/user/type.ts";

export const useChangeCardState = () => {
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

  return { handleBasketClick, handleHeartClick, favorites, groceryBasket };
};
