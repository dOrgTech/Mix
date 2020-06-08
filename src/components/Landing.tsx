import React from 'react'
import { createUseStyles } from 'react-jss'
import { Layout, Row, Col, Button } from 'antd'
import { StyleConstants } from '../constants/styles'

const { Content } = Layout;

const useStyles = createUseStyles({
  backgroundContainer: {
    background: StyleConstants.backgroundColor,
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContainer: {
    width: 502,
    height: 429,
    border: StyleConstants.borderPrimary,
    boxSizing: 'border-box',
    borderRadius: 4
  },
  text: {
    color: StyleConstants.textColor,
    paddingTop: 48,
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 0.6,
    margin: 0
  },
  walletButtons: {
    paddingTop: 32
  },
  walletButton: {
    width: 176,
    height: 38,
  }
})

export const Landing: React.FC<{}> = () => {

  const classes = useStyles()

  return (
    <Layout>
      <Content className={classes.backgroundContainer}>
        <div className={classes.mainContainer}>
          <p className={classes.text}>
            Connect a wallet to get started
          </p>
          <Row className={classes.walletButtons} gutter={20}>
            <Col>
              <Button shape={"round"} type={"ghost"} className={classes.walletButton}>
                Metamask
              </Button>
            </Col>
            <Col>
              <Button shape={"round"} type={"ghost"} className={classes.walletButton}>
                Wallet Connect
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}