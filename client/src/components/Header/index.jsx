/* eslint react/jsx-props-no-spreading: 0 */
/* eslint react/prop-types: 0 */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import HideOnScroll from '../HideOnScroll';
import Logout from '../Logout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuRight: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const { title, auth } = props;
  const classes = useStyles();

  const Signin = (
    <>
      <div className={classes.menuRight}>
        <span>
          <strong>
            {auth && auth.user ? `Welcome ${auth.user.name}` : ''}
          </strong>
        </span>
      </div>
      <div>
        <Logout />
      </div>
    </>
  );

  const Signout = (
    <>
      <div>
        <Button>Register</Button>
      </div>
      <div>
        <Button>Login</Button>
      </div>
    </>
  );

  return (
    <div className={classes.root}>
      <HideOnScroll {...props} direction="down">
        <AppBar color="inherit">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {title || ''}
            </Typography>
            {auth && auth.isAuthenticated ? Signin : Signout }
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Header);
