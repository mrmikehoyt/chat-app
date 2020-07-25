/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../MessagePrompt';

const useStyles = makeStyles({
  messages: {
    padding: '2% 0',
    overflow: 'auto',
    flex: 'auto',
  },
});

function Messages({ messages, name }) {
  const classes = useStyles();
  return (
    <ScrollToBottom>
      {messages.map((message, i) => (
        <div key={i} className={classes.messages}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default Messages;
