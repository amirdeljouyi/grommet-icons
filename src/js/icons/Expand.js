import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const Expand = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='Expand' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M10,14 L2,22 M1,15 L1,23 L9,23 M22,2 L14,10 M15,1 L23,1 L23,9' />
  </StyledIcon>
);
