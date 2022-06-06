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

  attack() {}
}
// ### Iteration 3: Saxon

// A `Saxon` is a weaker kind of `Soldier`. Unlike a `Viking`, a `Saxon` has no name. Their `receiveDamage()` method will also be different than the original `Soldier` version.

// Modify the `Saxon`, constructor function, have it inherit from `Soldier` and re-implement the `receiveDamage()` method for `Saxon`.

// #### inheritance

// - `Saxon` should extend `Soldier`

// #### class

// - You don't have to include constructor method since this class will inherit perfectly from the parents class, both, the health and the strength (it `extends` Soldier class :wink: )

// #### `attack()` method

// This method should be **inherited** from `Soldier`, no need to re-implement it.

// - should be a function
// - should receive **0 arguments**
// - should return **the `strength` property of the `Saxon`**

// #### `receiveDamage()` method

// This method needs to be **re-implemented** for `Saxon` because the `Saxon` version needs to have different return values.

// - should be a function
// - should receive **1 argument** (the damage)
// - should remove the received damage from the `health` property
// - **if the Saxon is still alive**, it should return **_"A Saxon has received DAMAGE points of damage"_**
// - **if the Saxon dies**, it should return **_"A Saxon has died in combat"_**

// War
class War {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
