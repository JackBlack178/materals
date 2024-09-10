import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <section>
      <Link to={"/"}>Назад</Link>
      <Link to={"series/1"}>Комплекс стеллажных систем</Link>
    </section>
  );
};

export { CategoryList };
