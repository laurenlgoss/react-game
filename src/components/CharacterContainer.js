import React from 'react';

import { Stack } from '@mui/material';

import ActionButton from './ActionButton';
import Character from './Character';
import HealthBar from './HealthBar';

function CharacterContainer({ isEnemy }) {
  return (
    <Stack spacing={3}>
      <HealthBar healthPercentage={100} />
      <Character isEnemy={isEnemy} />
      {!isEnemy ? <ActionButton /> : null}
    </Stack>
  );
}

export default CharacterContainer;
