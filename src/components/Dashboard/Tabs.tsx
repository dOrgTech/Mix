import React from "react";
import { Layout, Col, Button, Row } from "antd";
import Icon from "@ant-design/icons";
import { useStyles } from "./styles";
import { ReactComponent as MixIcon } from "../../assets/logo/Mix.svg";
import { ReactComponent as PortfolioIcon } from "../../assets/logo/portfolio.svg";
import { ReactComponent as WithdrawIcon } from "../../assets/logo/withdraw.svg";
import { ReactComponent as AnonymizeIcon } from "../../assets/logo/anonymize.svg";

export const Tabs: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Layout.Content className={classes.tabs}>
      <Col className={classes.logo}>
        <Icon component={MixIcon} />
      </Col>
      <Col className={classes.portfolio}>
        <ButtonTab name={"Portfolio"} Icon={PortfolioIcon} />
      </Col>
      <Col className={classes.anonymize}>
        <ButtonTab name={"Anonymize"} Icon={AnonymizeIcon} />
      </Col>
      <Col className={classes.withdraw}>
        <ButtonTab name={"Withdraw"} Icon={WithdrawIcon} />

      </Col>
    </Layout.Content>
  );
};

interface IButtonProps {
  name: string;
  Icon: React.StatelessComponent;
}

const ButtonTab = (props: IButtonProps) => {
  const classes = useStyles();
  const { name, Icon } = props;
  return (
    <Button className={classes.tabButton} shape={"round"} type={"ghost"}>
      <Row>
        <Col>
          <Icon />
        </Col>
        <Col>
          <div className={classes.buttonText}>{name}</div>
        </Col>
      </Row>
    </Button>
  );
};
