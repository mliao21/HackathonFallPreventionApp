import React, {useEffect, useState} from "react";
import { Chart } from "react-google-charts";




export const data = [
    ["x", "Systolic BP", "Heart Rate"],
    [0, 126, 75],
    [1, 135 , 70],
    [2, 149, 80],
    [3, 138, 90],
    [4, 135, 68],
    [5, 129, 72],
    [6, 140, 80],
    [7, 130, 100],
];

export const options = {
    hAxis: {
        title: "Day",
    },
    vAxis: {
        title: "Value",
    },
    series: {
        1: {curveType: "function"},
    },
};





export function Trend () {

    return (
        <Chart
            chartType="LineChart"
            width="80%"
            height="200px"
            data={data}
            options={options}
        />

    );

}