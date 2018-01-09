import React from 'react';
import PropTypes from 'prop-types';

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';

import Grid from 'material-ui/Grid';
import Filters from '../components/dashboards/Filters.jsx';
import Table from '../components/dashboards/Table.jsx';
import Chart from '../components/dashboards/Chart.jsx';
import { withTracker } from 'meteor/react-meteor-data';

const Dashboard = (props) => {
  const { ready, data } = props;

  const header = Object.keys(data[0] || {}).filter(v => v !== 'id');
  const aggregation = data.length ? data.reduce((prev, current) => {
    return {...prev};
  }) : [];

  console.log(aggregation);

  return ready ? (
    <Grid container>
      <Grid item xs={4}>
        <Filters />
      </Grid>
      <Grid item xs={8}>
        {/*<Chart data={data} />*/}
        <Table header={header} data={data} />
      </Grid>
    </Grid>
  ) : (<div>loading</div>);
};

Dashboard.propTypes = {
  ready: PropTypes.bool.isRequired,
  data: PropTypes.array,
};
Dashboard.defaultProps = {
  data: [],
};

const data = new ReactiveVar([]);
const ready = new ReactiveVar(false);
Meteor.call('gapi', (e, d) => { data.set(d); ready.set(true); });

export default withTracker(() => ({
  ready: ready.get(),
  data: data.get(),
}))(Dashboard);
