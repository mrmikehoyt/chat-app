/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';
import Header from '../../components/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    marginBottom: 100,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function NotesPage() {
  const classes = useStyles();

  // WIP Data
  const notes = [...new Array(40)]
    .map(
      (value, i) => [{
        id: i,
        message: `Test ${i}`,
      }],
    );

  return (
    <div>
      <Header title="Notes" />
      <Box display="flex" justifyContent="center" alignItems="center">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="h6" className={classes.title} color="primary">
                My notes
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default NotesPage;
