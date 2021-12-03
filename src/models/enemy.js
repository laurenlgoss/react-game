import Character from './character';

class Enemy extends Character {
  constructor(
    name,
    healthPercentage,
    img,
    setPlayerHealthPercentage,
    playerHealthPercentage,
    attacks
  ) {
    super(name, healthPercentage, img, true, attacks);
    this.setPlayerHealthPercentage = setPlayerHealthPercentage;
    this.playerHealthPercentage = playerHealthPercentage;
  }
}

export default Enemy;
