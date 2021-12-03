import React, { useState } from 'react';

import { Grid } from '@mui/material';

import CharacterContainer from '../components/CharacterContainer';
import rightDragonImg from '../images/right-dragon.png';
import leftDragonImg from '../images/left-dragon.png';

import Character from '../models/character';
import Attack from '../models/attack';

function Home() {
  const [leftHealthPercentage, setLeftHealthPercentage] = useState(100);
  const [rightHealthPercentage, setRightHealthPercentage] = useState(100);

  const leftCharacter = new Character(
    'User 1',
    leftHealthPercentage,
    false,
    rightDragonImg,
    setRightHealthPercentage,
    rightHealthPercentage,
    [new Attack('LIGHT ATTACK', 10), new Attack('HEAVY ATTACK', 15)]
  );
  const rightCharacter = new Character(
    'Enemy',
    rightHealthPercentage,
    true,
    leftDragonImg,
    []
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
