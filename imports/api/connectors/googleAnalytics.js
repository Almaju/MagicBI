import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

const gapiConnector = {
  setToken(token) {
    this.token = token;
  },

  get(args) {
    const url = `https://www.googleapis.com/analytics/v3/data/ga?${args}&access_token=${this.token}`;
    return HTTP.get(url).data;
  },

  parse(args) {
    const res = this.get(args);
    const data = [];
    res.rows.forEach((row, i) => {
      const doc = {
        id: i,
      };
      row.forEach((value, j) => {
        const header = res.columnHeaders[j];
        doc[header.columnType === 'METRIC' ? 'value' : header.name.replace('ga:', '')] = value;
      });
      data.push(doc);
    });

    return data;
  },
};

Meteor.methods({
  gapi() {
    gapiConnector.setToken(Meteor.user().services.google.accessToken);
    return gapiConnector.parse('ids=ga%3A162883448&start-date=30daysAgo&end-date=yesterday&metrics=ga%3AtotalEvents&dimensions=ga%3Adate%2Cga%3AeventCategory%2Cga%3AeventAction%2Cga%3AeventLabel&filters=ga%3AeventCategory%3D%3DFunnel%20Buttons');
  },
});
