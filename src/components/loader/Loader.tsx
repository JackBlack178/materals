import clsx from "clsx";
import cl from "./Loader.module.scss";

const Loader = ({ className }: { className?: string }) => {
  return <div className={clsx(cl.loader, className)}></div>;
};

export { Loader };
