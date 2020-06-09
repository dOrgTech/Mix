import React from "react";
import { Input } from "antd";
import { useStyles } from "./styles";
import { InputProps } from "antd/lib/input";

export const TextInput: React.FC<InputProps> = ({ ...rest }) => {
  const classes = useStyles();

  return <Input className={classes.input} {...rest} />;
};
