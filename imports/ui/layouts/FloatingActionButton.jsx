import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AddIcon from 'material-ui-icons/Add';

import ConnectorsList from '../components/connectors/ConnectorsList.jsx';

const styles = {
  button: {
    position: 'fixed',
    bottom: 23,
    right: 23,
  },
};

class FloatingActionButton extends React.Component {
  state = {
    open: false,
  };

  openModal = () => {
    this.setState({ open: true });
  }

  closeModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button fab color="primary" aria-label="add" className={classes.button} onClick={this.openModal}>
          <AddIcon />
        </Button>
        <Dialog open={this.state.open} onRequestClose={this.closeModal}>
          <ConnectorsList />
        </Dialog>
      </div>
    );
  }
}

FloatingActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButton);