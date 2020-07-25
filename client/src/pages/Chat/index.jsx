/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import SideBar from './sidebar';
import Input from './input';
import Header from '../../components/Header';
import Messages from '../../components/Messages';

let socket;

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: theme.palette.background.paper,
    height: '80%',
    width: '60%',
  },
}));

const Chat = ({ user }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'http://localhost:3001';

  useEffect(() => {
    if (user) {
      const Name = user;
      socket = io(ENDPOINT);
      setName(Name);

      socket.emit('join', { Name }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  }, [ENDPOINT, user]);

  useEffect(() => {
    socket.on('message', (itemMessage) => {
      // add incoming message to messages list
      setMessages((itemMessages) => [...itemMessages, itemMessage]);
    });

    socket.on('roomData', ({ users: roomUsers }) => {
      setUsers(roomUsers);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Header />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <SideBar users={users} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user?.name,
});

export default connect(mapStateToProps)(Chat);
