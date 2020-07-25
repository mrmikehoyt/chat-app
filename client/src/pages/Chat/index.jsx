/* eslint-disable no-shadow */
import React from 'react';
import {
  makeStyles,
  Box,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { compose } from 'redux';

import Header from '../../components/Header';
import ChatMessageList from '../../components/ChatMessageList';
import ChatInput from '../../components/ChatInput';
import { sendMessage } from '../../actions/chatAction';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    padding: theme.spacing(2),
  },
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 120px)',
  },
  chat: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  list: {
    display: 'flex',
  },
  input: {
    display: 'flex',
  },
}));

const Chat = ({
  socketId,
  messages,
  username,
  sendMessage,
}) => {
  const classes = useStyles();

  const handleInputMessage = (message) => {
    const newMessage = {
      author: username,
      id: v4(),
      time: new Date().getTime(),
      message,
      socketId,
    };
    sendMessage(newMessage);
  };

  return (
    <>
      <Header title="Chat" />
      <div className={classes.outerContainer}>
        <div className={classes.chat}>
          <Box className={classes.list}>
            <ChatMessageList messages={messages} socketId={socketId} />
          </Box>
          <Box className={classes.input}>
            <ChatInput onSubmit={handleInputMessage} />
          </Box>
        </div>
      </div>
    </>
  );
};

// Redux to this component props
const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  socketId: state.chat.socketId,
  username: state.auth?.user?.name,
});

// Dispatch values to redux state
const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => dispatch(sendMessage(message)),
});

// Compose Redux functions with component functions
export default compose(connect(mapStateToProps, mapDispatchToProps)(Chat));
