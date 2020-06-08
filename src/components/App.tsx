import React from 'react';
import { Col, Row, Typography, Button } from 'antd'
const { Title } = Typography

const App: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={8}/>
        <Col span={8}>
          <Title>Mix.eth</Title>
          <Button type="primary">
            Testing antd
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default App;
