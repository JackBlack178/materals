import { ProductCard } from "@components/product-card/ProductCard.tsx";

const CategoryItems = () => {
  const data = {
    id: "3",
    name: "Стандартные петли",
    code: "P424WN",
    price: {
      old_price: null,
      current_price: 75,
    },
    image: {
      url: "/pic/pic3.png",
    },
    material: 2,
  };

  return (
    <section>
      <h1>Комплекты стеллажных систем</h1>
      <ProductCard {...data} />
    </section>
  );
};

export { CategoryItems };
