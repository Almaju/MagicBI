import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Button from 'material-ui/Button';

class LoggingButton extends Component {
  handleClick = () => {
    Meteor.logout();
  }

  render() {
    return (
      <Button color="contrast" onClick={this.handleClick}>
        Logout
      </Button>
    );
  }
}

export default LoggingButton;
