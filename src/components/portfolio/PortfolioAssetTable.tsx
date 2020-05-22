
import React from 'react';
import styled from 'styled-components';
import WidgetSection from 'components/widget/WidgetSection';

const PortfolioAssetListWrapper = styled.div`
    display: flex;
    flex-basis: 100%;  
`;

const Grid = styled.div`
width: 100%;`;

const Row = styled.div`
    display: flex;
`;

const Col = styled.div`
    flex: ${(props) => props.size};
    padding: 0px 0px 10px 10px;
    border: 1px solid var(--medium-gray);
    border-radius: 4px;
`;

interface RowData {
    asset: string;
    balance: string;
    value: string;
    services: string;
}

const PortfolioAssetTable = () => {
    const assets: RowData[] = [
        {
            asset: 'Ether',
            balance: '12.512 ETH',
            value: '$2103.14',
            services: 'Compound'
        },
        {
            asset: 'Dai',
            balance: '1000.00 DAI',
            value: '$993.71',
            services: 'Compound'
        },
        {
            asset: 'USDC',
            balance: '5000.00 USDC',
            value: '$5000',
            services: ''
        },
        {
            asset: 'Wrapped BTC',
            balance: '2.543000 WBTC',
            value: '$22,029.06',
            services: ''
        }
    ];

    const renderHeaderRow = () => {
        return <Row>
            <Col size={1}>
                Asset/Service
            </Col>
            <Col size={1}>
                Balance
            </Col>
            <Col size={1}>
                Value (USD)
            </Col>
            <Col size={1.25}>
                In Services / Info
            </Col>
        </Row>
    }
    const renderRows = (assets: RowData[]) => {
        return assets.map(asset => {
            return <Row>
            <Col size={1}>
                {asset.asset}
            </Col>
            <Col size={1}>
                {asset.balance}
            </Col>
            <Col size={1}>
                {asset.value}
            </Col>
            <Col size={1.25}>
                {asset.services}
            </Col>
        </Row>
        })
    }

    return <WidgetSection>
    <PortfolioAssetListWrapper>
        <Grid>
            {renderHeaderRow()}
            {renderRows(assets)}
        </Grid>
    </PortfolioAssetListWrapper>
    </WidgetSection>;
};

export default PortfolioAssetTable;
