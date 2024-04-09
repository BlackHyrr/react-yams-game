import React from 'react';
import { useYamsContext } from '../../utils/context/yamsContext';

const Statistics = () => {
    const { state } = useYamsContext();
    const statistics = state.statistics;
    return (
        <div>
            <h1>Statistics</h1>
            <div>
                <p>Triple six: {statistics.tripleSix}</p>
                <p>Straight: {statistics.straight}</p>
                <p>Full house: {statistics.fullHouse}</p>
            </div>
        </div>
    );
};

export default Statistics;