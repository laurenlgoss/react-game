import React from 'react';

import { Button, Grid } from '@mui/material';

function ActionButton({ character }) {
  function handleButtonClick(attack) {
    if (!character.isEnemy) {
      const newEnemyHealthPercentage =
        character.enemyHealthPercentage - attack.strength;

      if (newEnemyHealthPercentage < 0) {
        character.setEnemyHealthPercentage(0);
      } else {
        character.setEnemyHealthPercentage(newEnemyHealthPercentage);
      }
    } else {
      const newPlayerHealthPercentage =
        character.playerHealthPercentage - attack.strength;

      if (newPlayerHealthPercentage < 0) {
        character.setPlayerHealthPercentage(0);
      } else {
        character.setPlayerHealthPercentage(newPlayerHealthPercentage);
      }
    }
  }

  return (
    <Grid container>
      {character.attacks.map((attack) => {
        return (
          <Grid item xs={6} sx={{ padding: '0.1em' }}>
            <Button
              variant="contained"
              disableElevation
              size="small"
              color="error"
              sx={{ width: '100%', borderRadius: '.15em' }}
              onClick={() => handleButtonClick(attack)}
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
