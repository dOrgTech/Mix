import React from "react";
import { Layout } from "antd";
import Icon from "@ant-design/icons";

import { Tabs } from "./Tabs";
import { useStyles } from "./styles";
import { ReactComponent as AddressAvatar } from "../../assets/logo/address.svg";
import { ReactComponent as Arrow } from "../../assets/logo/arrow.svg";

const { Sider, Content } = Layout;

interface IProps {
  children: JSX.Element
}

export const Dashboard: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();

  return (
    <Layout className={classes.layout}>
      <Sider className={classes.leftSider}>
        <Tabs />
      </Sider>
      <Content>{props.children}</Content>
      <Sider className={classes.rightSider}>
        <div className={classes.connection}>
          <Icon component={AddressAvatar} className={classes.addressAvatar}/> 
          <p className={classes.address}> 0xE6a...07b </p>
          <Icon component={Arrow} className={classes.arrow}/> 
        </div>
      </Sider>
    </Layout>
  );
};
