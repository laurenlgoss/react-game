import React from 'react';

import ActionButton from './ActionButton';
import Character from './Character';
import HealthBar from './HealthBar';

function CharacterContainer() {
  return (
    <>
      <HealthBar healthPercentage={100} />
      <Character />
      <ActionButton />
    </>
  );
}

export default CharacterContainer;
