import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Web3ReactManager from 'components/Web3ReactManager';
import FooterContainer from './containers/FooterContainer';
import LandingPageFooter from './components/LandingPage/Footer';
import LandingPageHeader from './components/LandingPage/Header';
import PortfolioContainer from './containers/PortfolioContainer';
import styled from 'styled-components';

import FAQPage from 'components/FAQPage';
import MenuBar from 'components/MenuBar';
import WalletInfoContainer from 'containers/WalletInfoContainer';
import MixAssetsContainer from 'containers/MixAssetsContainer';
import EarnInterestContainer from 'containers/EarnInterestContainer';
import WithdrawContainer from 'containers/WithdrawContainer';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ContentContainer = ({ children }) => {
    return (
        <div className="exchange-body-container">
            <div className="app-shell">
                <Web3ReactManager>
                    <ContentWrapper>
                        <MenuBar />
                        {children}
                        <WalletInfoContainer />
                    </ContentWrapper>
                    <FooterContainer />
                </Web3ReactManager>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/portfolio" />
                </Route>
                <Route path="/portfolio/">
                    <ContentContainer>
                        <PortfolioContainer />
                    </ContentContainer>
                </Route>
                <Route path="/mix-assets/">
                    <ContentContainer>
                        <MixAssetsContainer />
                    </ContentContainer>
                </Route>
                <Route path="/earn-interest">
                    <ContentContainer>
                        <EarnInterestContainer />
                    </ContentContainer>
                </Route>
                <Route path="/withdraw">
                    <ContentContainer>
                        <WithdrawContainer />
                    </ContentContainer>
                </Route>
                <Route exact path="/faq">
                    <div className="landing-body-container">
                        <div className="app-shell">
                            <LandingPageHeader />
                            <FAQPage />
                            <LandingPageFooter />
                        </div>
                    </div>
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default App;
