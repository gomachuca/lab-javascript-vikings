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
class Viking {}
ñjskjsd
// Saxon
class Saxon {}

// War
class War {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
