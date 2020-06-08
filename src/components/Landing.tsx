import React from "react";
import { createUseStyles } from "react-jss";
import { Layout, Row, Col, Button } from "antd";
import Icon from "@ant-design/icons";
import { StyleConstants } from "../constants/styles";
import { ReactComponent as MixIcon } from "../assets/logo/Mix.svg";

const { Content } = Layout;

const useStyles = createUseStyles({
  backgroundContainer: {
    background: StyleConstants.backgroundColor,
    height: "100vh",
    width: "100%",
  },
  mainContainer: {
    width: 502,
    height: 429,
    border: StyleConstants.borderPrimary,
    boxSizing: "border-box",
    borderRadius: 4,
  },
  text: {
    color: StyleConstants.textColor,
    paddingTop: 48,
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 0.6,
    margin: 0,
  },
  logo: {
    fontSize: 24
  },
  logoText: {
    color: StyleConstants.textColor,
    textAlign: "center",
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: 0.6,
    margin: 0,
  },
  logoContainer: {
    paddingBottom: 40
  },
  secondText: {
    color: StyleConstants.textColor,
    paddingTop: 30,
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 0.6,
    margin: 0,
  },
  walletButtons: {
    paddingTop: 32,
  },
  walletButton: {
    width: 176,
    height: 38,
    color: StyleConstants.textColor,
    border: StyleConstants.borderButton,
    boxSizing: "border-box",
    borderRadius: 32,
    "&:hover": {
      background: StyleConstants.backgroundButtonHover,
      border: StyleConstants.borderButtonHover,
      boxSizing: "border-box",
      borderRadius: 32,
      color: StyleConstants.textColor,
    },
  },
  separator: {
    display: "block",
    height: 1,
    background: "#2C3340",
    padding: 0,
    width: 162,
  },
  grayText: {
    color: StyleConstants.gray,
    margin: 0,
  },
  orRow: {
    paddingTop: 32,
  },
});

export const Landing: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Content>
        <Row justify={"center"} align={"middle"} className={classes.backgroundContainer}>
          <Col>
            <Row justify={"center"} align={"middle"} gutter={12} className={classes.logoContainer}>
              <Col>
                <Icon component={MixIcon} className={classes.logo}/>
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
                      <Button
                        shape={"round"}
                        type={"ghost"}
                        className={classes.walletButton}
                      >
                        Metamask
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        shape={"round"}
                        type={"ghost"}
                        className={classes.walletButton}
                      >
                        Wallet Connect
                      </Button>
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
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
