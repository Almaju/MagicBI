import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  flexGrow: {
    flex: '1 1 auto',
  },
};

const Pusher = ({ classes }) => (
  <div className={classes.flexGrow} />
);

Pusher.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pusher);
