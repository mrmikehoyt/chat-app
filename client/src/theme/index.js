/* eslint-disable import/extensions */
import { createMuiTheme } from '@material-ui/core';
import palette from './palette.js';
import typography from './typography.js';
import 'typeface-poppins';

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiButton: {
      label: {
        color: palette.background.default,
      },
      containedPrimary: {
        backgroundColor: palette.white,
        '&:hover': {
          backgroundColor: palette.white,
        },
      },
    },
    MuiTypography: {
      colorPrimary: {
        color: palette.white,
      },
    },
    MuiOutlinedInput: {
      root: {
        color: palette.white,
        '& $notchedOutline': {
          borderColor: palette.white,
        },
        '&:hover $notchedOutline': {
          borderColor: palette.white,
        },
        '&$focused $notchedOutline': {
          borderColor: palette.white,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: palette.white,
        },
      },
    },
  },
});

// .MuiOutlinedInput-notchedOutline

export default theme;
