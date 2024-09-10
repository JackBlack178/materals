import { FC } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { ArrowDownicon } from "@components/icons/ArrowDownicon.tsx";
import clsx from "clsx";
import cl from "./CustomSelect.module.scss";

interface CustomSelectProps {
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  className,
  options,
  value,
  handleChange,
}) => {
  return (
    <FormControl className={clsx(cl.select, className)}>
      <Select
        value={value}
        onChange={handleChange}
        IconComponent={() => <ArrowDownicon className={cl.select__icon} />}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { CustomSelect };
