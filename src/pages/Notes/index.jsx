/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  Box,
  GridList,
  GridListTile,
} from '@material-ui/core';
import Header from '../../components/Header';
import NoteCard from '../../components/NoteCard';

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
