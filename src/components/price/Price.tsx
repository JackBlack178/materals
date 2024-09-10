import { FC } from "react";
import cl from "./Price.module.scss";
import { RubIcon } from "@components/icons/RubIcon.tsx";
import clsx from "clsx";

interface PriceProps {
  price: number;
  className?: string;
  old?: boolean;
}

const Price: FC<PriceProps> = ({ price, className, old }) => {
  return (
    <div className={clsx(cl.price, className, old && cl.price__old)}>
      {price}
      <RubIcon className={cl.price__icon} />
    </div>
  );
};

export { Price };
