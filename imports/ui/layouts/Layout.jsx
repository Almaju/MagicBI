import React from 'react';
import PropTypes from 'prop-types';

import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import { withStyles } from 'material-ui/styles';

import palette from './Palette.jsx';

import AppBar from './AppBar.jsx';
import SideBar from './SideBar.jsx';
import FloatingActionButton from './FloatingActionButton.jsx';

const theme = createMuiTheme({ palette });

const styles = {
  root: {
    width: 'calc(100% - 240px)',
    marginLeft: 240,
  },
  container: {
    padding: theme.spacing.unit * 3,
  },
};

const Layout = (props) => {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar />
      <SideBar />
      <FloatingActionButton />
      <div className={classes.root}>
        <div className={classes.container}>
          {props.children}
        </div>
      </div>
    </MuiThemeProvider>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Layout);
