import React from 'react';
import {
  TextField,
  Grid,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
  },
  newMessageRow: {
    width: '100%',
    padding: theme.spacing(2, 2, 2),
  },
  field: {
    flexGrow: 1,
  },
}));

const Input = (props) => {
  const { message, setMessage, sendMessage } = props;
  const classes = useStyles();
  const handleSend = (e) => {
    sendMessage(e);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.newMessageRow}
        alignItems="flex-end"
      >
        <Grid className={classes.field}>
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            margin="dense"
            fullWidth
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
          />
        </Grid>
        <Grid>
          <IconButton type="submit" onClick={handleSend}>
            <Send color="primary" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Input;
