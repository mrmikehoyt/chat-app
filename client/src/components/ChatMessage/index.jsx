import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: (props) => {
    const { author } = props;
    if (author === 'other') {
      return {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.white,
        width: 'fit-content',
        margin: theme.spacing(2),
        alignSelf: 'flex-start',
        wordBreak: 'break-word',
      };
    }
    return {
      backgroundColor: '#1982FC',
      color: theme.palette.white,
      width: 'fit-content',
      margin: theme.spacing(2),
      alignSelf: 'flex-end',
      wordBreak: 'break-word',
    };
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}));

function ChatMessage({
  message,
  author,

}) {
  const classes = useStyles({ author });

  return (
    <Paper elevation={4} className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h6" gutterBottom>
          {message.message}
        </Typography>
        <Typography variant="caption" gutterBottom>
          {message.author}
        </Typography>
      </Box>
    </Paper>
  );
}

export default ChatMessage;
