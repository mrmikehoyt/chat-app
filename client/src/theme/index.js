/* eslint-disable import/extensions */
import { createMuiTheme } from '@material-ui/core';
import palette from './palette.js';
import typography from './typography.js';
import 'typeface-poppins';

const theme = createMuiTheme({
  palette,
  typography,
});

export default theme;
