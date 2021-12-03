import React from 'react';

import { Stack } from '@mui/material';

import ActionButton from './ActionButton';
import HealthBar from './HealthBar';

function CharacterContainer({ character }) {
  return (
    <Stack spacing={3}>
      <HealthBar healthPercentage={character.healthPercentage} />
      <img src={character.img} alt="Character" />
      {!character.isEnemy ? <ActionButton character={character} /> : null}
    </Stack>
  );
}

export default CharacterContainer;
