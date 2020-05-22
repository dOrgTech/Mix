import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
    flex-basis: 15%;
    margin-top: 30px;
`;

const MenuItem = styled.div`
    flex-basis: 90%;
    font-size: 16px;
    cursor: pointer;
`;

const SelectedMenuItem = styled(MenuItem)`
    color: var(--nav-text-dark);
    line-height: 24px;
    cursor: pointer;
`;

const MenuBar = ({}) => {
    const NavItem = withRouter(
        ({ option, route, history, location, children }) => {
            return (
                <MenuItem
                    onClick={() => {
                        history.push(route);
                    }}
                >
                    {children}
                </MenuItem>
            );
        }
    );

    return (
        <NavWrapper>
            <img src="DXdao.svg" />
            <NavItem route="/portfolio">Portfolio</NavItem>
            <NavItem route="/mix-assets">Mix Assets</NavItem>
            <NavItem route="/earn-interest">Earn Interest</NavItem>
            <NavItem route="/withdraw">Withdraw</NavItem>
        </NavWrapper>
    );
};

export default MenuBar;
