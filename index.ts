// Creating interfaces
interface Pokemon {
  attacks: Attack[];
  pokeName: string;
  level: number;
  maxHealth: number;
  health: number;
  isConscious: boolean;
  learnAttack(attack: {}): void;
  showStatus(): string;
  initializeAttack(attack: Attack, pokemon: Pokemon): string;
}

interface Attack {
  attackPointsLeft: number;
  attackName: string;
  attackPower: number;
  attackPoints: number;
  attackPointUsage: number;
  useAttack(): void;
}

// Creating Pokemon class
class Pokemon {
  attacks: Attack[];
  health: number;
  isConscious: boolean;
  constructor(
    public pokeName: string,
    public level: number,
    public maxHealth: number
  ) {
    this.attacks = [];
    this.health = this.maxHealth;
    this.isConscious = true;
  }
  learnAttack(attack: Attack): void {
    this.attacks.push(attack);
  }
  showStatus(): string {
    return `Level: ${this.level}, Health: ${this.health}`;
  }
  initializeAttack(attack: Attack, pokemon: Pokemon): string {
    // check if pokemon has enough ap left for the attack
    if (this.health > 0) {
      if (pokemon.health > 0) {
        if (attack.attackPointsLeft >= attack.attackPointUsage) {
          attack.useAttack();
          pokemon.health -= attack.attackPower;
          if(pokemon.health <= 0) {
            pokemon.isConscious = true;
            return `${this.pokeName} used ${attack.attackName}. \n${pokemon.pokeName} received ${attack.attackPower} damage! \n${pokemon.pokeName} is defeated.`;
          }
          return `${this.pokeName} used ${attack.attackName}. \n${pokemon.pokeName} received ${attack.attackPower} damage!`;
        } else {
          return "You don't have enough AP to use that attack.";
        }
      } else {
        pokemon.isConscious = false;
        return `${pokemon.pokeName} is already unconscious!`;
      }
    } else {
      this.isConscious = false;
      return `${this.pokeName} is unconscious!`;
    }
  }
}

// Creating Attack class
class AttackSkill {
  attackPointsLeft: number;
  constructor(
    public attackName: string,
    public attackPower: number,
    public attackPoints: number,
    public attackPointUsage: number
  ) {
    this.attackPointsLeft = this.attackPoints;
  }
  useAttack(): void {
    this.attackPointsLeft -= this.attackPointUsage;
  }
}

// Create different attack instances
const lightning = new AttackSkill("Lightning", 40, 50, 5);
const tackle = new AttackSkill("Tackle", 40, 50, 5);
const pound = new AttackSkill("pound", 40, 50, 5);
const volttackle = new AttackSkill("Volttackle", 50, 50, 8);
const razorleaf = new AttackSkill("Razorleaf", 40, 60, 5);
const ember = new AttackSkill("Ember", 40, 50, 5);

// Create Pokemon subclasses (Prototypes)
// Bulbasaur
class Bulbasaur extends Pokemon {
  attacks = [tackle, razorleaf];
  constructor() {
    super("Bulbasaur", 5, 90);
  }
}

// Pikachu
class Pikachu extends Pokemon {
  attacks = [tackle, lightning];
  constructor() {
    super("Pikachu", 5, 85);
  }
}

// Charmander
class Charmander extends Pokemon {
  attacks = [tackle, ember];
  constructor() {
    super("Charmander", 5, 85);
  }
}

// Create different pokemon instances
const pikachu0 = new Pikachu();
const charmander0 = new Charmander();
const bulbasaur0 = new Bulbasaur();

// Make pokemon learn new attacks
pikachu0.learnAttack(volttackle);

// Create function to heal Pokemon in the Pokecenter
function healPokemon(pokemon: Pokemon): string {
  pokemon.health = pokemon.maxHealth;
  pokemon.attacks.forEach(
    (attack) => (attack.attackPointsLeft = attack.attackPoints)
  );
  return "Your Pokemon is fully healed now.";
}


// Create a party
const party = [];
party.push(pikachu0, charmander0, bulbasaur0);




// Fight!
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(charmander0);
console.log(charmander0.initializeAttack(ember, pikachu0));