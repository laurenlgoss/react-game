import React from 'react';

import { Grid } from '@mui/material';

import CharacterContainer from '../components/CharacterContainer';
import rightDragonImg from '../images/right-dragon.png';
import leftDragonImg from '../images/left-dragon.png';

import Character from '../models/character';
import Attack from '../models/attack';

const leftCharacter = new Character('User 1', 100, false, rightDragonImg, [
  new Attack('HEAVY ATTACK', 15),
  new Attack('LIGHT ATTACK', 10),
]);
const rightCharacter = new Character('Enemy', 100, true, leftDragonImg, []);

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
