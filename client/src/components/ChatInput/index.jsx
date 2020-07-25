import React, { useState, useRef, useEffect } from 'react';
import {
  IconButton,
  Box,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
  },
  textfield: {
    display: 'flex',
    flexGrow: 1,
  },
});

function ChatInput({
  onSubmit,
}) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const textRef = useRef();

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = () => {
    if (inputValue.trim().length > 0) {
      onSubmit(inputValue);
      setInputValue('');
      textRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Box className={classes.root}>
      <TextField
        className={classes.textfield}
        label="Global Chat"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        inputRef={textRef}
      />
      <IconButton onClick={handleSubmit}>
        <Send color="primary" />
      </IconButton>
    </Box>
  );
}

export default ChatInput;
