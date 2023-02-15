import React, { useState, useEffect } from 'react';

import { getTestData } from './helper';

const TestData = () => {
    const [dummyData, setDummyData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const newData = await getTestData();
        setLoading(false);
        setDummyData(newData);
    }

    useEffect(() => {
        getData();
    }, []);

    console.log('dummyData...', dummyData);

    return (
        <div>
            { loading && <div>Loading test data...</div>}
            { !loading && <div>Test Data</div>}
        </div>
    )
}

export default TestData;