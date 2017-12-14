import React from 'react';
import PropTypes from 'prop-types';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
  const { data } = props;

  return (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
          data={data}
          margin={{
    top: 5, right: 30, left: 20, bottom: 5,
    }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {keys.map(n =>
            <Line type="monotone" dataKey={n} stroke="#82ca9d" />)}
        </LineChart>
  </ResponsiveContainer>);
};

Chart.propTypes = {
  data: PropTypes.array,
};
Chart.defaultProps = {
  data: [],
};

export default Chart;
