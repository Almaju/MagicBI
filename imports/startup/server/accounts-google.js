import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  { $set: Meteor.settings.credentials.google },
);
