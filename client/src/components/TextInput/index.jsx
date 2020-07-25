import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    margin: '1rem',
    '& > * + *': {
      margin: '0rem 0rem 0rem 1rem',
    },
  },
  input: {
    display: 'flex',
    flexGrow: 1,
  },
}));

function TextInput({
  inputValue,
  onInputChange,
  onKeyPress,
  placeHolder,
  marginType,
  labelText,
  inputSize,
  inputVariant,
  inputRef,
}) {
  const classes = useStyles();

  return (
    <TextField
      label={labelText || ''}
      placeholder={placeHolder}
      margin={marginType}
      InputLabelProps={{
        shrink: true,
      }}
      variant={inputVariant}
      size={inputSize}
      className={classes.input}
      onChange={onInputChange}
      onKeyPress={onKeyPress}
      value={inputValue}
      inputRef={inputRef}
    />
  );
}

export default TextInput;
