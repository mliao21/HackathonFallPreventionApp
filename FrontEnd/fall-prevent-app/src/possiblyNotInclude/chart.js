import React, { Component } from 'react'
import Chart from 'react-google-charts'
import {Link} from "react-router-dom";
const TrendData = [
    ['Diameter', 'Age'],
    [8, 37],
    [4, 19.5],
    [11, 52],
    [4, 22],
    [3, 16.5],
    [6.5, 32.8],
    [14, 72],
]
const TrendOptions = {
    title: 'Age of sugar maples vs. trunk diameter, in inches',
    hAxis: { title: 'Diameter' },
    vAxis: { title: 'Age' },
    legend: 'none',
    trendLines: { 0: {} },
}
class TrendChart extends Component {
    render() {
        return (
            <div>
                < container className="container">
                  {/*<section className="section mt-4" >*/}
                   <h2>React Trend Line Chart Example</h2>
                   <Chart
                    width={'600px'}
                    height={'350px'}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={TrendData}
                    options={TrendOptions}
                    rootProps={{ 'data-testid': '1' }}
                   />
                  <Link to="/">Main Page</Link>
                  {/*< /section>*/}
                </container>
            </div>
        )
    }
}
export default TrendChart;
