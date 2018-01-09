import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { DDPLink } from 'meteor/swydo:ddp-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import '../imports/startup/client/startup.jsx';
import Routes from '../imports/startup/client/routes.jsx';

const client = new ApolloClient({
  link: new DDPLink(),
  cache: new InMemoryCache(),
});

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>,
    document.getElementById('app'),
  );
});
