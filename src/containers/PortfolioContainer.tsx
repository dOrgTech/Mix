import React from 'react';
import WidgetWrapper from 'components/widget/WidgetWrapper';
import WidgetHeader from 'components/widget/WidgetHeader';
import PortfolioStatList from 'components/portfolio/PortfolioStats';
import PortfolioAssetList from 'components/portfolio/PortfolioAssetTable';

const PortfolioContainer = () => {
    return (
        <WidgetWrapper>
            <WidgetHeader title={'Portfolio'} />
            <PortfolioStatList/>
            <PortfolioAssetList/>
        </WidgetWrapper>
    );
};

export default PortfolioContainer;
