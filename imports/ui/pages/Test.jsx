import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Test = ({ data }) => (
  <div>
    {data.say}
  </div>
);

Test.propTypes = {
  data: PropTypes.object.isRequired,
};

const query = gql`
  query {
    say
  }
`;

// Use the graphql container to run the allPosts query and pass the results to PostsContainer
export default graphql(query)(Test);
