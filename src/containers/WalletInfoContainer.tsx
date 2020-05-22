import React from 'react';
import styled from 'styled-components';
import Web3ConnectStatus from 'components/Web3ConnectStatus';


const WallentInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-basis: 15%;
    justify-content: space-between;
    margin-top: 30px;
`;

const WalletInfoContainer = () => {
    return (
        <WallentInfoWrapper>
            <Web3ConnectStatus text="Connect Wallet" />
        </WallentInfoWrapper>
    );
};

export default WalletInfoContainer;
