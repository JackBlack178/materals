export type User = {
  id: string;
  name: string;
  email: string;
  favorites: string[];
  groceryBasket: string[];
};

export const isUser = (user: any): user is User => {
  return (
    user &&
    user.id &&
    user.name &&
    user.email &&
    user.favorites &&
    user.groceryBasket
  );
};
