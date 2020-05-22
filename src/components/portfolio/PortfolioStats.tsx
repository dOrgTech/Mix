import React from 'react';
import styled from 'styled-components';
import WidgetSection from 'components/widget/WidgetSection';
import { stringify } from 'querystring';

const PortfolioStatListWrapper = styled.div`
    display: flex;
    flex-basis: 100%;
`;

const StatItemList = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
`;

const StatItem = styled.div`
    display: flex;
    flex-basis: 20%;
    flex-direction: column;
    justify-content: space-between;
`;

const StatItemTitle = styled.div`
    display: flex;
    flex-basis: 100%;
`;
const StatItemValue = styled.div`
    display: flex;
    flex-basis: 100%;
`;

const Title = styled.div`
    display: flex;
`;

interface StatListItem {
    title: string;
    value: string;
}

interface PortfolioStatListProps {}

const PortfolioStats = (props: PortfolioStatListProps) => {
    const items: StatListItem[] = [
        {
            title: 'Total Holdings',
            value: '$977,625.67',
        },
        {
            title: '24h Change',
            value: '+1.58%',
        },
        {
            title: 'In Services',
            value: ' $42,454.33',
        },
        {
            title: 'Interest (APR)',
            value: '6.64%',
        },
        {
            title: 'Interest Earned',
            value: '$200.56',
        },
    ];

    const renderStatListItems = (items: StatListItem[]) => {
        return items.map(item => {
            return <StatItem>
            <StatItemTitle>{item.title}</StatItemTitle>
            <StatItemValue>{item.value}</StatItemValue>
        </StatItem>
        })
    };

    return (
        <WidgetSection>
            <PortfolioStatListWrapper>
                <StatItemList>
                    {renderStatListItems(items)}
                </StatItemList>
            </PortfolioStatListWrapper>
        </WidgetSection>
    );
};

export default PortfolioStats;
