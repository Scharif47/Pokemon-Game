var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Creating Pokemon class
var Pokemon = /** @class */ (function () {
    function Pokemon(pokeName, level, maxHealth) {
        this.pokeName = pokeName;
        this.level = level;
        this.maxHealth = maxHealth;
        this.attacks = [];
        this.health = this.maxHealth;
        this.isConscious = true;
    }
    Pokemon.prototype.learnAttack = function (attack) {
        this.attacks.push(attack);
    };
    Pokemon.prototype.showStatus = function () {
        return "Level: " + this.level + ", Health: " + this.health;
    };
    Pokemon.prototype.initializeAttack = function (attack, pokemon) {
        // check if pokemon has enough ap left for the attack
        if (this.health > 0) {
            if (pokemon.health > 0) {
                if (attack.attackPointsLeft >= attack.attackPointUsage) {
                    attack.useAttack();
                    pokemon.health -= attack.attackPower;
                    if (pokemon.health <= 0) {
                        pokemon.isConscious = true;
                        return this.pokeName + " used " + attack.attackName + ". \n" + pokemon.pokeName + " received " + attack.attackPower + " damage! \n" + pokemon.pokeName + " is defeated.";
                    }
                    return this.pokeName + " used " + attack.attackName + ". \n" + pokemon.pokeName + " received " + attack.attackPower + " damage!";
                }
                else {
                    return "You don't have enough AP to use that attack.";
                }
            }
            else {
                pokemon.isConscious = false;
                return pokemon.pokeName + " is already unconscious!";
            }
        }
        else {
            this.isConscious = false;
            return this.pokeName + " is unconscious!";
        }
    };
    return Pokemon;
}());
// Creating Attack class
var AttackSkill = /** @class */ (function () {
    function AttackSkill(attackName, attackPower, attackPoints, attackPointUsage) {
        this.attackName = attackName;
        this.attackPower = attackPower;
        this.attackPoints = attackPoints;
        this.attackPointUsage = attackPointUsage;
        this.attackPointsLeft = this.attackPoints;
    }
    AttackSkill.prototype.useAttack = function () {
        this.attackPointsLeft -= this.attackPointUsage;
    };
    return AttackSkill;
}());
// Create different attack instances
var lightning = new AttackSkill("Lightning", 40, 50, 5);
var tackle = new AttackSkill("Tackle", 40, 50, 5);
var pound = new AttackSkill("pound", 40, 50, 5);
var volttackle = new AttackSkill("Volttackle", 50, 50, 8);
var razorleaf = new AttackSkill("Razorleaf", 40, 60, 5);
var ember = new AttackSkill("Ember", 40, 50, 5);
// Create Pokemon subclasses (Prototypes)
// Bulbasaur
var Bulbasaur = /** @class */ (function (_super) {
    __extends(Bulbasaur, _super);
    function Bulbasaur() {
        var _this = _super.call(this, "Bulbasaur", 5, 90) || this;
        _this.attacks = [tackle, razorleaf];
        return _this;
    }
    return Bulbasaur;
}(Pokemon));
// Pikachu
var Pikachu = /** @class */ (function (_super) {
    __extends(Pikachu, _super);
    function Pikachu() {
        var _this = _super.call(this, "Pikachu", 5, 85) || this;
        _this.attacks = [tackle, lightning];
        return _this;
    }
    return Pikachu;
}(Pokemon));
// Charmander
var Charmander = /** @class */ (function (_super) {
    __extends(Charmander, _super);
    function Charmander() {
        var _this = _super.call(this, "Charmander", 5, 85) || this;
        _this.attacks = [tackle, ember];
        return _this;
    }
    return Charmander;
}(Pokemon));
// Create different pokemon instances
var pikachu0 = new Pikachu();
var charmander0 = new Charmander();
var bulbasaur0 = new Bulbasaur();
// Make pokemon learn new attacks
pikachu0.learnAttack(volttackle);
// Create function to heal Pokemon in the Pokecenter
function healPokemon(pokemon) {
    pokemon.health = pokemon.maxHealth;
    pokemon.attacks.forEach(function (attack) { return (attack.attackPointsLeft = attack.attackPoints); });
    return "Your Pokemon is fully healed now.";
}
healPokemon(pikachu0);
console.log(pikachu0);
console.log(healPokemon(charmander0));
console.log(charmander0);
// Create a party
var party = [];
party.push(pikachu0, charmander0, bulbasaur0);
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(pikachu0.initializeAttack(lightning, charmander0));
console.log(charmander0);
console.log(charmander0.initializeAttack(ember, pikachu0));
