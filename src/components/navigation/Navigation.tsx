import { FC } from "react";
import { Link } from "react-router-dom";
import cl from "./Navigation.module.scss";

interface NavigationProps {
  routes: {
    name: string;
    to: string;
  }[];
}

const Navigation: FC<NavigationProps> = ({ routes }) => {
  return (
    <nav className={cl.navigation}>
      <ul className={cl.navigation__list}>
        {routes.map((route, index) => (
          <li className={cl.navigation__item} key={index}>
            <Link to={route.to} className={cl.navigation__link}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };
