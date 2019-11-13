import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class Example extends PureComponent {

  render() {
    return (
      <LineChart
        width={300}
        height={120}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateTime" />
        <YAxis />
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Line type="monotone" dataKey="value" dot={false} stroke="#8884d8" />
      </LineChart>
      
    );
  }
}
