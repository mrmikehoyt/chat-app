/* eslint react/jsx-props-no-spreading: 0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import HideOnScroll from '../HideOnScroll';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
});

function Header(props) {
  const { title } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HideOnScroll {...props} direction="down">
        <AppBar color="inherit">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {title || ''}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}
export default Header;
