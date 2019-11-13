import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';


export default class Example extends PureComponent {

  render() {
    return (
      // <LineChart
      //   width={300}
      //   height={120}
      //   data={this.props.data}
      //   margin={{
      //     top: 5, right: 30, left: 20, bottom: 5,
      //   }}
      // >
      //   <CartesianGrid strokeDasharray="3 3" />
      //   <XAxis dataKey="dateTime" />
      //   <YAxis />
      //   {/* <Tooltip /> */}
      //   {/* <Legend /> */}
      //   <Line type="monotone" dataKey="value" dot={false} stroke="#8884d8" />
      // </LineChart>
       <AreaChart
       width={300}
       height={120}
       data={this.props.data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dateTime" />
          <YAxis />
          {/* <Tooltip /> */}
          <Area type="monotone" dataKey="value" dot={false} stroke="#444" fill="#014d6d" />
     </AreaChart>
    );
  }
}
