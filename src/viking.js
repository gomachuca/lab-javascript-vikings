// Soldier
class Soldier {
  constructor(health, strenght) {
    this.health = health;
    this.strength = strenght;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage; //should remove the received damage from the health property
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strenght) {
    super(health, strenght);
    this.name = name;
  }

  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${theDamage} points of damage`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

//
// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage) {
    this.health -= theDamage;
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }

  attack() {
    return this.strength;
  }
}

// #### class

// - You don't have to include constructor method since this class will inherit perfectly from the parents class, both, the health and the strength (it `extends` Soldier class :wink: )

// #### `attack()` method

// War
class War {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
// addViking(){}
// addSaxon(){}
// vikingAttack(){}
// saxonAttack(){}
// showStatus(){}
