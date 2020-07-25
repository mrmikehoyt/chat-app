/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ChatMessage from '../ChatMessage';

const useStyles = makeStyles(() => ({
  list: {
    width: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 200px)',
  },
}));

function ChatMessageList({
  messages,
  socketId,
}) {
  const classes = useStyles();
  const listRef = React.createRef();
  useEffect(() => {
    const lastElement = listRef.current.children[listRef.current.children.length - 1];
    lastElement?.scrollIntoView();
  }, [messages, listRef]);
  return (
    <List ref={listRef} className={classes.list}>
      {messages?.length > 0
      && messages?.map((message) => {
        const author = message.socketId === socketId ? 'self' : 'other';
        return (
          <ChatMessage
            key={message.id}
            message={message}
            author={author}
          />
        );
      })}
    </List>
  );
}

export default ChatMessageList;
