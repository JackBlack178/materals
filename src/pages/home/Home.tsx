import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Категория товаров</h1>
      <Link to={"/category/1"}>Системы хранения</Link>
    </section>
  );
};

export { Home };
