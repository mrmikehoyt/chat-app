/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

const Logout = ({ logout }) => {
  const handleOnClick = () => {
    logout();
    location.reload();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOnClick}>
        Logout
      </Button>
    </>
  );
};

export default connect(null, { logout })(Logout);
