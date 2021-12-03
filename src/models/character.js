class Character {
  constructor(name, healthPercentage, isEnemy, img, setRightHealthPercentage, rightHealthPercentage, attacks) {
    this.name = name;
    this.healthPercentage = healthPercentage;
    this.isEnemy = isEnemy;
    this.img = img;
    this.setRightHealthPercentage = setRightHealthPercentage;
    this.rightHealthPercentage = rightHealthPercentage;
    this.attacks = attacks;
  }
}

export default Character;
