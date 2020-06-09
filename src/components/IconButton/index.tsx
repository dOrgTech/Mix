import React from "react";
import { ButtonProps } from "antd/lib/button";
import { Col, Row, Button } from "antd";
import Icon from "@ant-design/icons";
import { useStyles } from "./styles";

interface Props extends ButtonProps {
  icon: any;
  iconClassName?: string;
  textClassName?: string;
  text: string;
}

export const IconButton: React.FC<Props> = ({
  icon,
  iconClassName,
  textClassName,
  text,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Button shape={"round"} type={"ghost"} {...rest}>
      <Row align={"middle"} justify={"center"} gutter={14}>
        <Col>
          <Icon
            component={icon}
            className={`${classes.icon} ${iconClassName}`}
          />
        </Col>
        <Col>
          <p className={`${classes.text} ${textClassName}`}>{text}</p>
        </Col>
      </Row>
    </Button>
  );
};
