import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts'

const LineChart = ({id}) => {
    const [chartData, setChartData] = useState([]);


    useEffect(() => {
        const fetchHistoricalData = async () => {
            const response = await fetch(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
            );
            const data = await response.json();

            // Format the data for Google Charts
            const formattedData = data.prices.map(price => [new Date(price[0]), price[1]]);
            setChartData([['Date', 'Price'], ...formattedData]);
        };

        fetchHistoricalData();
    }, [id]);

    const options = {
        title: 'Price History (Last 7 Days)',
        curveType: 'function',
        legend: { position: 'bottom' },
    };


    return (
        <div>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={chartData}
                options={options}
            />
        </div>
    )
}

export default LineChart
