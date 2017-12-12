import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  googleLogin = () => {
    alert('hi');
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root}>
        <ListItem button onClick={this.googleLogin}>
          <Avatar alt="Google Analytics" src="/img/ga.png" />
          <ListItemText primary="Google Analytics" />
        </ListItem>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
