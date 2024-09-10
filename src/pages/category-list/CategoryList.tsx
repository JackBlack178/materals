import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
    >
      <Link to={"/"}>Назад</Link>
      <Link to={"series/1"}>Комплекты стеллажных систем</Link>
    </section>
  );
};

export { CategoryList };
