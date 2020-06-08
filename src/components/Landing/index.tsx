import React from "react";
import { Layout, Row, Col, Button } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as MixIcon } from "../../assets/logo/Mix.svg";
import { ReactComponent as DxDAOIcon } from "../../assets/logo/DxDao.svg";
import { ReactComponent as WalletConnectIcon } from "../../assets/logo/WalletConnect.svg";
import { ReactComponent as MetamaskIcon } from "../../assets/logo/Metamask.svg";
import { TextInput } from "../Input";
import { IconButton } from "../IconButton";
import { useStyles } from "./styles";

const { Content } = Layout;

export const Landing: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Content>
        <Row justify={"center"} className={classes.backgroundContainer}>
          <Col>
            <Row
              justify={"center"}
              gutter={12}
              className={classes.logoContainer}
            >
              <Col>
                <Icon component={MixIcon} className={classes.logo} />
              </Col>
              <Col>
                <p className={classes.logoText}>Mix</p>
              </Col>
            </Row>
            <Row justify={"center"} align={"middle"}>
              <Col>
                <div className={classes.mainContainer}>
                  <p className={classes.text}>
                    Connect a wallet to get started
                  </p>
                  <Row
                    className={classes.walletButtons}
                    gutter={20}
                    justify={"center"}
                  >
                    <Col>
                      <IconButton
                        shape={"round"}
                        type={"ghost"}
                        className={classes.iconButton}
                        icon={MetamaskIcon}
                        text={"Metamask"}
                        iconClassName={classes.metamaskIcon}
                      />
                    </Col>
                    <Col>
                      <IconButton
                        shape={"round"}
                        type={"ghost"}
                        className={classes.iconButton}
                        icon={WalletConnectIcon}
                        text={"Wallet Connect"}
                      />
                    </Col>
                  </Row>
                  <Row
                    className={classes.orRow}
                    gutter={16.5}
                    justify={"center"}
                    align={"middle"}
                  >
                    <Col>
                      <div className={classes.separator} />
                    </Col>
                    <Col>
                      <p className={classes.grayText}>or</p>
                    </Col>
                    <Col>
                      <div className={classes.separator} />
                    </Col>
                  </Row>
                  <p className={classes.secondText}>
                    Track your portofolio, connect later
                  </p>
                  <Row className={classes.inputRow} justify={"center"}>
                    <Col className={classes.inputContainer}>
                      <TextInput placeholder={"Search by Address/ENS name"} />
                    </Col>
                  </Row>
                  <Row
                    justify={"center"}
                    className={classes.watchButtonContainer}
                  >
                    <Col>
                      <Button className={classes.watchButton} type={"ghost"}>
                        Start watching
                      </Button>
                    </Col>
                  </Row>
                </div>
                <Row
                  justify={"center"}
                  gutter={8}
                  className={classes.madeByContainer}
                >
                  <Col>
                    <div className={classes.madeByIconContainer}>
                      <Icon
                        component={DxDAOIcon}
                        className={classes.madeByIcon}
                      />
                    </div>
                  </Col>
                  <Col>
                    <p className={classes.madeByText}>
                      Made by <a href={"#"}>Dxdao</a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
