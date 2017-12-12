import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';

import SideBarList from './SideBarList.jsx';

const styles = {
  drawerPaper: {
    width: 240,
  },
};

const SideBar = ({ classes }) => (
  <Drawer
    type="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <SideBarList />
  </Drawer>
);

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);
