import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
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

function HealthBar({ color, healthPercentage }) {
  const useStyles = makeStyles({
    healthBar: ({ color }) => ({
      '& .MuiLinearProgress-barColorPrimary': {
        backgroundColor: color,
      },
    }),
  });

  const { healthBar } = useStyles({ color });

  return (
    <LinearProgressWithLabel value={healthPercentage} className={healthBar} />
  );
}

export default HealthBar;
