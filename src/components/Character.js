import React from 'react';

import leftDragonImg from '../images/left-dragon.png';
import rightDragonImg from '../images/right-dragon.png';

function Character({ isEnemy }) {
  return <img src={isEnemy ? leftDragonImg : rightDragonImg} />;
}

export default Character;
