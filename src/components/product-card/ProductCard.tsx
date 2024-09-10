import { FC } from "react";
import cl from "./ProductCard.module.scss";
import { GroceryBasketIcon } from "@components/icons/GroceryBasketIcon.tsx";
import { HeartIcon } from "@components/icons/HeartIcon.tsx";
import clsx from "clsx";
import { SuccessIcon } from "@components/icons/SuccessIcon.tsx";
import { Price } from "@components/price/Price.tsx";
import { Product } from "@models/product/types.ts";

type ProductCardProps = {
  isSuccess?: boolean;
} & Product;

const ProductCard: FC<ProductCardProps> = ({
  code,
  name,
  image,
  price,
  isSuccess,
}) => {
  const onSale = !!price.old_price;

  return (
    <article
      className={clsx(cl.product_card, onSale && cl.product_card__on_sale)}
    >
      <img className={cl.product_card__image} src={image.url} alt={""} />
      <div className={cl.product_card__body}>
        <span
          className={clsx(
            cl.product_card__code,
            !code && cl.product_card__code__hidden,
          )}
        >
          {code || "No code"}
        </span>
        <h2 className={cl.product_card__title}>{name}</h2>
        <div className={cl.product_card__more_info}>
          <ul className={cl.product_card__price_list}>
            {onSale && (
              <li className={clsx(cl.product_card__price_item)}>
                {price.old_price && <Price old price={price.old_price} />}
              </li>
            )}
            <li className={cl.product_card__price_item}>
              <Price price={price.current_price} />
            </li>
          </ul>
          <ul className={cl.product_card__button_list}>
            <li className={cl.product_card__button_item}>
              {isSuccess ? (
                <button
                  className={clsx(
                    cl.product_card__button,
                    cl.product_card__button__success,
                  )}
                >
                  <SuccessIcon />
                </button>
              ) : (
                <button className={cl.product_card__button}>
                  <GroceryBasketIcon />
                </button>
              )}
            </li>

            <li className={cl.product_card__button_item}>
              <button className={cl.product_card__button}>
                <HeartIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export { ProductCard };
