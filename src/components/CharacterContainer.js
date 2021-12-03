import React from 'react';

import { Stack } from '@mui/material';

import ActionButton from './ActionButton';
import Character from './Character';
import HealthBar from './HealthBar';

function CharacterContainer({ character }) {
  return (
    <Stack spacing={3}>
      <HealthBar healthPercentage={character.healthPercentage} />
      <img src={character.img} />
      {!character.isEnemy ? <ActionButton attacks={character.attacks} /> : null}
    </Stack>
  );
}

export default CharacterContainer;
