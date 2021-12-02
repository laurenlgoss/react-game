import React from 'react';

import { Button, Grid } from '@mui/material';

function ActionButton() {
  const attackArray = ['LIGHT ATTACK', 'HEAVY ATTACK'];

  return (
    <Grid container>
      {attackArray.map((attack) => {
        return (
          <Grid item xs={6} sx={{ padding: '0.1em'}}>
            <Button
              variant="contained"
              disableElevation
              size="small"
              sx={{ width: '100%' }}
            >
              {attack}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ActionButton;
