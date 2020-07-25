import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  sideContainer: {
    background: theme.palette.background.paper,
    marginLeft: 30,
    color: theme.palette.white,
    justifyContent: 'space-between',
    borderRadius: 4,
    height: '80%',
    width: '30%',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
}));

const SideBar = ({ users }) => {
  const classes = useStyles();
  return (
    <div className={classes.sideContainer}>
      <div>
        <Typography variant="h5">
          Number of user
          {' '}
          {users.length}
        </Typography>
      </div>
      {
        users ? users.map(({ name }) => (
          <List>
            <ListItem key={name}>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircle />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={(name)} />
            </ListItem>
          </List>
        ))
          : null
      }
    </div>
  );
};

export default SideBar;
