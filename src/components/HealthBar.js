import React from 'react';

import { Box, LinearProgress, Typography } from '@mui/material';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35, textAlign: 'right' }}>
        <Typography variant="body2" color="white">
          {Math.round(props.value)}
        </Typography>
      </Box>
    </Box>
  );
}

function HealthBar({ healthPercentage }) {
  return <LinearProgressWithLabel value={healthPercentage} />;
}

export default HealthBar;
