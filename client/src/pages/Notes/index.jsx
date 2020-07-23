/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
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
import { connect } from 'react-redux';
import Header from '../../components/Header';
import NoteCard from '../../components/NoteCard';
import { getNotes, deleteNote } from '../../actions/noteActions';

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

function NotesPage({
  getNotes,
  item,
  isAuthenticated,
  deleteNote,
}) {
  const classes = useStyles();

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  // Ensure that notes is undefined
  let notes = [];

  if (typeof item !== 'undefined') {
    notes = item;
  }

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
                  {notes.map(({ _id, title, content }) => (
                    <GridListTile key={_id}>
                      <NoteCard title={title} message={content} />
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  item: state.item.notes.notes,
});

export default connect(mapStateToProps, { getNotes, deleteNote })(NotesPage);
