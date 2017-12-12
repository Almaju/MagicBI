import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ResultsTable from '../components/connectors/ResultsTable.jsx';

const query = [];
let data = [];

[
  [
    '20171204',
    'Funnel Buttons',
    'Clicked',
    'Address',
    '1471',
  ],
  [
    '20171204',
    'Funnel Buttons',
    'Clicked',
    'Pay',
    '1155',
  ],
  [
    '20171204',
    'Funnel Buttons',
    'Failed',
    'Address',
    '186',
  ],
  [
    '20171204',
    'Funnel Buttons',
    'Failed',
    'Pay',
    '66',
  ],
  [
    '20171204',
    'Funnel Buttons',
    'Succeed',
    'Address',
    '1285',
  ],
  [
    '20171204',
    'Funnel Buttons',
    'Terms Refused',
    'Pay',
    '1',
  ],
  [
    '20171205',
    'Funnel Buttons',
    'Clicked',
    'Address',
    '1612',
  ],
  [
    '20171205',
    'Funnel Buttons',
    'Clicked',
    'Pay',
    '1267',
  ],
  [
    '20171205',
    'Funnel Buttons',
    'Failed',
    'Address',
    '255',
  ],
  [
    '20171205',
    'Funnel Buttons',
    'Failed',
    'Pay',
    '83',
  ],
  [
    '20171205',
    'Funnel Buttons',
    'Succeed',
    'Address',
    '1358',
  ],
  [
    '20171205',
    'Funnel Buttons',
    'Terms Refused',
    'Pay',
    '1',
  ],
  [
    '20171206',
    'Funnel Buttons',
    'Clicked',
    'Address',
    '1675',
  ],
  [
    '20171206',
    'Funnel Buttons',
    'Clicked',
    'Pay',
    '1224',
  ],
  [
    '20171206',
    'Funnel Buttons',
    'Failed',
    'Address',
    '302',
  ],
  [
    '20171206',
    'Funnel Buttons',
    'Failed',
    'Pay',
    '79',
  ],
  [
    '20171206',
    'Funnel Buttons',
    'Succeed',
    'Address',
    '1373',
  ],
  [
    '20171206',
    'Funnel Buttons',
    'Terms Refused',
    'Pay',
    '1',
  ],
  [
    '20171207',
    'Funnel Buttons',
    'Clicked',
    'Address',
    '1504',
  ],
  [
    '20171207',
    'Funnel Buttons',
    'Clicked',
    'Pay',
    '1135',
  ],
  [
    '20171207',
    'Funnel Buttons',
    'Failed',
    'Address',
    '241',
  ],
  [
    '20171207',
    'Funnel Buttons',
    'Failed',
    'Pay',
    '63',
  ],
  [
    '20171207',
    'Funnel Buttons',
    'Succeed',
    'Address',
    '1262',
  ],
  [
    '20171208',
    'Funnel Buttons',
    'Clicked',
    'Address',
    '1477',
  ],
  [
    '20171208',
    'Funnel Buttons',
    'Clicked',
    'Pay',
    '1161',
  ],
  [
    '20171208',
    'Funnel Buttons',
    'Failed',
    'Address',
    '233',
  ],
  [
    '20171208',
    'Funnel Buttons',
    'Failed',
    'Pay',
    '90',
  ],
  [
    '20171208',
    'Funnel Buttons',
    'Succeed',
    'Address',
    '1244',
  ],
  [
    '20171208',
    'Funnel Buttons',
    'Terms Refused',
    'Pay',
    '3',
  ],
  [
    '20171209',
    'Funnel Buttons',
    'Clicked',
    'Address',
    '1579',
  ],
  [
    '20171209',
    'Funnel Buttons',
    'Clicked',
    'Pay',
    '1241',
  ],
  [
    '20171209',
    'Funnel Buttons',
    'Failed',
    'Address',
    '248',
  ],
  [
    '20171209',
    'Funnel Buttons',
    'Failed',
    'Pay',
    '117',
  ],
  [
    '20171209',
    'Funnel Buttons',
    'Succeed',
    'Address',
    '1331',
  ],
  [
    '20171210',
    'Funnel Buttons',
    'Clicked',
    'Address',
    '3386',
  ],
  [
    '20171210',
    'Funnel Buttons',
    'Clicked',
    'Pay',
    '2678',
  ],
  [
    '20171210',
    'Funnel Buttons',
    'Failed',
    'Address',
    '457',
  ],
  [
    '20171210',
    'Funnel Buttons',
    'Failed',
    'Pay',
    '197',
  ],
  [
    '20171210',
    'Funnel Buttons',
    'Succeed',
    'Address',
    '2931',
  ],
  [
    '20171210',
    'Funnel Buttons',
    'Terms Refused',
    'Pay',
    '2',
  ],
  [
    '20171211',
    'Funnel Buttons',
    'Clicked',
    'Address',
    '2866',
  ],
  [
    '20171211',
    'Funnel Buttons',
    'Clicked',
    'Pay',
    '2230',
  ],
  [
    '20171211',
    'Funnel Buttons',
    'Failed',
    'Address',
    '432',
  ],
  [
    '20171211',
    'Funnel Buttons',
    'Failed',
    'Pay',
    '149',
  ],
  [
    '20171211',
    'Funnel Buttons',
    'Succeed',
    'Address',
    '2433',
  ],
  [
    '20171211',
    'Funnel Buttons',
    'Terms Refused',
    'Pay',
    '2',
  ],
].forEach((n) => {
  query[n[0]] = query[n[0]] || {};
  query[n[0]][n[1] + n[2] + n[3]] = parseInt(n[4]);
});

query.forEach((n, index) => {
  n.name = index;
  data.push(n);
});
console.log(data);

const keys = [
'Funnel ButtonsClickedAddress',
'Funnel ButtonsClickedPay',
'Funnel ButtonsFailedAddress',
'Funnel ButtonsFailedPay',
'Funnel ButtonsSucceedAddress',
'Funnel ButtonsTerms RefusedPay'
];

const Home = () => (
  <div>
    <LineChart
      width={600}
      height={300}
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
      {keys.map((n) => 
        <Line type="monotone" dataKey={n} stroke="#82ca9d" />
      )}
    </LineChart>
    {/*<ResultsTable header={['one', 'two', 'three', 'four']} data={data} />*/}
  </div>);

export default Home;
