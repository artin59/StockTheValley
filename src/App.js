import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

// Import necessary components and register them with chart.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register components so that chart.js can recognize them
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function App() {
    const [precision, setPrecision] = useState(null);
    const [graphData, setGraphData] = useState({ actual: [], predictions: [] });

    // Generate years from 1950 to 2024
    const years = Array.from({ length: 2024 - 1950 + 1 }, (_, i) => 1950 + i);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5000/predict');
                console.log(result.data); // Log the fetched data
                setPrecision(result.data.precision_score);
                setGraphData(result.data.graph_data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const data = {
        labels: years,  // Set the X-axis labels to the years array
        datasets: [
            {
                label: 'Actual Prices',
                data: graphData.actual,
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            },
            {
                label: 'Predicted Prices',
                data: graphData.predictions,
                borderColor: 'rgba(255,99,132,1)',
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',  // X-axis label
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Stock Prices',  // Y-axis label
                },
            },
        },
    };

    return (
        <div className="App">
            <h1>Stock Market Prediction</h1>
            <h2>Stock Prediction Precision: {precision}</h2>
            <Line data={data} options={options} />
        </div>
    );
}

export default App;
