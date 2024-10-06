import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const StockPrediction = () => {
    const [precision, setPrecision] = useState(null);
    const [graphData, setGraphData] = useState({ dates: [], actual: [], predictions: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/predict');
            setPrecision(result.data.precision_score);
            setGraphData(result.data.graph_data);
        };
        fetchData();
    }, []);

    const data = {
        labels: graphData.dates,
        datasets: [
            {
                label: 'Actual',
                data: graphData.actual,
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
            {
                label: 'Predicted',
                data: graphData.predictions,
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
            },
        ],
    };

    return (
        <div>
            <h2>Stock Prediction Precision: {precision}</h2>
            <Line data={data} />
        </div>
    );
};

export default StockPrediction;
