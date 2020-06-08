import React from "react";
import { Layout } from "antd";
import { HoldingsTable } from "./HoldingsTable";

const Portfolio: React.FC<{}> = () => {
  return (
    <Layout>
      <div>Balances will be here</div>
      <HoldingsTable />
    </Layout>
  );
};

export default Portfolio;
