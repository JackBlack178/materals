import { ProductCard } from "@components/product-card/ProductCard.tsx";

const CategoryItems = () => {
  const data = {
    id: "1",
    name: "Ручка дверная",
    code: "L422WH",
    price: {
      old_price: 400,
      current_price: 355,
    },
    image: {
      url: "/pic/pic1.png",
    },
    material: 1,
  };

  return (
    <section>
      <ProductCard {...data} />
    </section>
  );
};

export { CategoryItems };
