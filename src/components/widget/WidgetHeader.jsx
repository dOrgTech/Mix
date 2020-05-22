import React from 'react';
import styled from 'styled-components';
import WidgetSection from './WidgetSection';
import { withRouter } from 'react-router-dom';
import backarrow from '../../assets/images/backarrow.svg';

const WidgetHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
    padding-top: 30px;
    min-height: 50px;
`;

const BackArrow = styled.img`
    display: flex;
    height: 30px;
    padding: 0px 20px;
`;

const Title = styled.div`
    display: flex;
`;

const WidgetHeader = (props) => {
    const NavBackArrow = withRouter(
        ({ history, children }) => {
            return (
                <BackArrow
                    src={backarrow}
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    {children}
                </BackArrow>
            );
        }
    );

    return (
        <WidgetSection>
            <WidgetHeaderWrapper>
                <NavBackArrow />
                <Title>{props.title}</Title>
            </WidgetHeaderWrapper>
        </WidgetSection>
    );
};
export default WidgetHeader;
