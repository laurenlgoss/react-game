import React, { useState } from 'react';

import { Grid } from '@mui/material';

import CharacterContainer from '../components/CharacterContainer';
import rightDragonImg from '../images/right-dragon.png';
import leftDragonImg from '../images/left-dragon.png';

import Player from '../models/player';
import Enemy from '../models/enemy';
import Attack from '../models/attack';

function Home() {
  const [playerHealthPercentage, setPlayerHealthPercentage] = useState(100);
  const [enemyHealthPercentage, setEnemyHealthPercentage] = useState(100);

  const leftCharacter = new Player(
    'Player',
    playerHealthPercentage,
    rightDragonImg,
    setEnemyHealthPercentage,
    enemyHealthPercentage,
    [new Attack('LIGHT ATTACK', 10), new Attack('HEAVY ATTACK', 15)]
  );
  const rightCharacter = new Enemy(
    'Enemy',
    enemyHealthPercentage,
    leftDragonImg,
    setPlayerHealthPercentage,
    playerHealthPercentage,
    [new Attack('LIGHT ATTACK', 10), new Attack('HEAVY ATTACK', 15)]
  );

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100vh' }}
    >
      <Grid item xs={4} sx={{ textAlign: 'center', margin: '2em' }}>
        <CharacterContainer character={leftCharacter} />
      </Grid>
      <Grid item xs={4} sx={{ textAlign: 'center', margin: '2em' }}>
        <CharacterContainer character={rightCharacter} />
      </Grid>
    </Grid>
  );
}

export default Home;
