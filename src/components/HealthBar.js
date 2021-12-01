import React from 'react';

import { LinearProgress } from '@mui/material';

function HealthBar({ healthPercentage }) {
  return (
    <LinearProgress
      variant="determinate"
      value={healthPercentage}
    />
  );
}

export default HealthBar;
