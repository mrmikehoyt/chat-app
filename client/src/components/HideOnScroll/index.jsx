/* eslint react/prop-types: 0 */
import React from 'react';
import {
  useScrollTrigger,
  Slide,
} from '@material-ui/core';

function HideOnScroll({ children, window, direction }) {
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction={direction || 'down'} in={!trigger}>
      { children }
    </Slide>
  );
}

export default HideOnScroll;
