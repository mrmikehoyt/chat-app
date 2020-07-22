import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import {
  Home,
  Message,
  Note,
  Settings,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} showLabels>
      <BottomNavigationAction
        component={Link}
        to="/dashboard"
        label="Dashboard"
        value="dashboard"
        icon={<Home />}
      />
      <BottomNavigationAction
        component={Link}
        to="/message"
        label="Message"
        value="message"
        icon={<Message />}
      />
      <BottomNavigationAction
        component={Link}
        to="/notes"
        label="Notes"
        value="notes"
        icon={<Note />}
      />
      <BottomNavigationAction
        component={Link}
        to="/settings"
        label="Settings"
        value="settings"
        icon={<Settings />}
      />
    </BottomNavigation>
  );
}

export default Navigation;
