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

function HealthBar({ healthPercentage }) {
  let color;

  if (healthPercentage > 50) {
    color = 'green';
  } else if (healthPercentage <= 50 && healthPercentage > 25) {
    color = 'orange';
  } else if (healthPercentage <= 25) {
    color = 'red';
  }

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
