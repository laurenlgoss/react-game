import Character from './character';

class Player extends Character {
  constructor(
    name,
    healthPercentage,
    img,
    setEnemyHealthPercentage,
    enemyHealthPercentage,
    attacks
  ) {
    super(name, healthPercentage, img, false, attacks);
    this.setEnemyHealthPercentage = setEnemyHealthPercentage;
    this.enemyHealthPercentage = enemyHealthPercentage;
  }
}

export default Player;
