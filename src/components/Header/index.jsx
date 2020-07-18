/* eslint react/jsx-props-no-spreading: 0 */
/* eslint react/prop-types: 0 */

import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  fade,
} from '@material-ui/core';
import {
  ArrowBack as BackIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import HideOnScroll from '../HideOnScroll';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header(props) {
  const {
    title, backToggle, onKeyPress, searchQuery,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HideOnScroll {...props} direction="down">
        <AppBar color="inherit">
          <Toolbar>
            {backToggle
              ? (
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <BackIcon />
                </IconButton>
              )
              : (
                <IconButton disabled className={classes.menuButton} aria-label="">
                  <BackIcon />
                </IconButton>
              )}
            <Typography variant="h6" className={classes.title}>
              {title || ''}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyPress={onKeyPress}
                value={searchQuery}
              />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
}
export default Header;
