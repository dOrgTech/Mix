import React from 'react';
import styled from 'styled-components';

const WidgetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 70%;
    height: 100%;
    margin-left: 24px;
    border: 1px solid var(--medium-gray);
    border-radius: 4px;
    background-color: white;
    justify-content: space-between;
`;

export default WidgetWrapper;