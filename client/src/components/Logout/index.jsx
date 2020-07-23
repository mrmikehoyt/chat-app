import React from 'react';
import {
  Link
} from '@material-ui/core'
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

export const Logout = ({ logout }) => {
  return (
    <>
      <Link onClick={logout} >
        Logout
      </Link>
    </>
  )
}

export default connect(null, { logout })(Logout);
