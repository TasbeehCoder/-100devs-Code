

// Define a class called StreetFighter class StreetFighter // Define a constructor method that takes four parameters: name, health, attack, and defense constructor(name, health, attack, defense) // Assign the parameters to the corresponding properties of the object this.name = name this.health = health this.attack = attack this.defense = defense

// Define a method called fight that takes another StreetFighter object as a parameter fight(opponent) // Print the names of the fighters print this.name + " vs " + opponent.name // Repeat until one fighter’s health is zero or below while this.health > 0 and opponent.health > 0 // Calculate the damage dealt by this fighter to the opponent damage = this.attack - opponent.defense // Reduce the opponent’s health by the damage opponent.health = opponent.health - damage // Print the damage and the opponent’s remaining health print this.name + " deals " + damage + " damage to " + opponent.name print opponent.name + " has " + opponent.health + " health left" // If the opponent’s health is zero or below, print that this fighter wins and return if opponent.health <= 0 print this.name + " wins!" return // Otherwise, swap the roles of the fighters and repeat the same steps else swap this and opponent

// Define a method called heal that takes a number as a parameter heal(amount) // Increase the health of this fighter by the amount this.health = this.health + amount // Print the new health of this fighter print this.name + " heals " + amount + " health" print this.name + " has " + this.health + " health now"

// Define a method called train that takes a number as a parameter train(amount) // Increase the attack of this fighter by the amount this.attack = this.attack + amount // Print the new attack of this fighter print this.name + " trains " + amount + " attack" print this.name + " has " + this.attack + " attack now"

// End of the class definition