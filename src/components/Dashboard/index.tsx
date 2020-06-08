import React from "react";
import { Layout } from "antd";
import { Tabs } from "./Tabs";
import { useStyles } from "./styles";

const { Sider, Content } = Layout;

export const Dashboard: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Layout className={classes.layout}>
      <Sider className={classes.leftSider}>
        <Tabs />
      </Sider>
      <Content className={classes.contentContainer}>muy pro</Content>
      <Sider className={classes.rightSider} />
    </Layout>
  );
};
