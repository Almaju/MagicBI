import React from 'react';
import { Meteor } from 'meteor/meteor';

import Grid from 'material-ui/Grid';
import Filters from '../components/dashboards/Filters.jsx';
import Table from '../components/dashboards/Table.jsx';
import Chart from '../components/dashboards/Chart.jsx';

const Dashboard = () => {
  let data = false;

  Meteor.call('gapi', (e, d) => { data = d; });

  return data ?
    (<Grid container>
      <Grid item xs={4}>
        <Filters />
      </Grid>
      <Grid item xs={8}>
        <Chart />
        <Table />
      </Grid>
    </Grid>)
    : (<div>loading</div>);
};

export default Dashboard;
