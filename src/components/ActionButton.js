import React from 'react';

import { Button, Grid } from '@mui/material';

function ActionButton({ character }) {
  return (
    <Grid container>
      {character.attacks.map((attack) => {
        return (
          <Grid item xs={6} sx={{ padding: '0.1em'}}>
            <Button
              variant="contained"
              disableElevation
              size="small"
              color="error"
              sx={{ width: '100%', borderRadius: '.15em' }}
              onClick={() => character.setRightHealthPercentage(character.rightHealthPercentage - attack.strength)}
            >
              {attack.name}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ActionButton;
