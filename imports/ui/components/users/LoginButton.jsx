import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Button from 'material-ui/Button';

class LoginButton extends Component {
  handleClick = () => {
    Meteor.loginWithGoogle({
      requestPermissions: ['https://www.googleapis.com/auth/analytics.readonly'],
      requestOfflineToken: true,
    }, (err) => {
      if (err) {
        // handle error
      } else {
        // successful login!
      }
    });
  }

  render() {
    return (
      <Button color="contrast" onClick={this.handleClick}>
        Login
      </Button>
    );
  }
}

export default LoginButton;
