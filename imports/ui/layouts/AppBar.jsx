import React from 'react';
import PropTypes from 'prop-types';

import { Meteor } from 'meteor/meteor';
import { withStyles } from 'material-ui/styles';
import { withTracker } from 'meteor/react-meteor-data';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import LoginButton from '../components/users/LoginButton.jsx';
import LogoutButton from '../components/users/LogoutButton.jsx';

const styles = {
  root: {
    width: 'calc(100% - 240px)',
    marginLeft: 240,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const TopBar = (props) => {
  const { user, classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          {user ? <LogoutButton /> : <LoginButton />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
};

TopBar.defaultProps = {
  user: {},
};

export default withTracker(() => ({
  user: Meteor.user(),
}))(withStyles(styles)(TopBar));
