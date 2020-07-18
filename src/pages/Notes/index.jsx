/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  Box,
  GridList,
  GridListTile,
  IconButton,
} from '@material-ui/core';
import {
  Add,
} from '@material-ui/icons';
import Header from '../../components/Header';
import NoteCard from '../../components/NoteCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    marginBottom: 100,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(2, 0, 2),
  },
  icon: {
    height: 'fit-content',
  },
}));

function NotesPage() {
  const classes = useStyles();

  // WIP Data
  const notes = [...new Array(40)]
    .map(
      (value, i) => [{
        id: i,
        title: `Title ${i}`,
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
              <div className={classes.header}>
                <Typography variant="h6">
                  My notes
                </Typography>
                <IconButton aria-label="add an note" color="secondary">
                  <Add />
                </IconButton>
              </div>

              <div>
                <GridList cellHeight="auto" cols={2} spacing={20}>
                  {notes.map((note, i) => (
                    <GridListTile key={note.id} cols={note.cols || 1}>
                      <NoteCard title={`Title ${i}`} message={`Message ${i}`} />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default NotesPage;
