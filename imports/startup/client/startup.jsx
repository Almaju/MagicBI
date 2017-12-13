import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

Meteor.startup(() => {
  // Tracker.autorun(function() {
  //   if (Meteor.user()) { Meteor.call('gapi', (e, d) => { console.log(d); }); }
  // });
});
