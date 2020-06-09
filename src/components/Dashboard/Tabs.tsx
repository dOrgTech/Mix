import React from "react";
import { Layout, Col } from "antd";
import Icon from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import { useStyles } from "./styles";
import { ReactComponent as MixIcon } from "../../assets/logo/Mix.svg";
import { ReactComponent as PortfolioIcon } from "../../assets/logo/portfolio.svg";
import { ReactComponent as SelectedPortfolioIcon } from "../../assets/logo/selectedPortfolio.svg";
import { ReactComponent as WithdrawIcon } from "../../assets/logo/withdraw.svg";
import { ReactComponent as SelectedWithdrawIcon } from "../../assets/logo/selectedWithdraw.svg";
import { ReactComponent as AnonymizeIcon } from "../../assets/logo/anonymize.svg";
import { ReactComponent as SelectedAnonymizeIcon } from "../../assets/logo/selectedAnonymize.svg";
import { IconButton } from "../shared";

export const Tabs: React.FC<{}> = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const isPortfolio = pathname.includes("/portfolio");
  const isAnonymize = pathname.includes("/anonymize");
  const isWithdraw = pathname.includes("/withdraw");

  return (
    <Layout.Content className={classes.tabs}>
      <Col className={classes.logo}>
        <Icon component={MixIcon} className={classes.mixLogo} />
      </Col>
      <Col className={classes.portfolio}>
        <Link to="portfolio">
          <IconButton
            iconClassName={classes.logoSize}
            text={"Portfolio"}
            icon={isPortfolio ? SelectedPortfolioIcon : PortfolioIcon}
            className={isPortfolio ? classes.selectedButtonText : classes.buttonText}
          />
        </Link>
      </Col>
      <Col className={classes.anonymize}>
        <Link to="anonymize">
          <IconButton
            iconClassName={classes.logoSize}
            text={"Anonymize"}
            icon={isAnonymize ? SelectedAnonymizeIcon : AnonymizeIcon}
            className={isAnonymize ? classes.selectedButtonText : classes.buttonText}
          />
        </Link>
      </Col>
      <Col className={classes.withdraw}>
        <Link to="withdraw">
          <IconButton
            iconClassName={classes.logoSize}
            text={"Withdraw"}
            icon={isWithdraw ? SelectedWithdrawIcon : WithdrawIcon}
            className={isWithdraw ? classes.selectedButtonText : classes.buttonText}
          />
        </Link>
      </Col>
    </Layout.Content>
  );
};
