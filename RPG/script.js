let player = {
  name: "Hero",
  health: 100,
  attackPower: 10,
  defense: 5,
};
let monster = {
  name: "Vilian",
  health: 80,
  attackPower: 8,
  defense: 3,
};

function calculateDamage(attacker, defender) {
  let damage = attacker.attackPower - defender.defense;
  return damage > 0 ? damage : 0;
}

function playerAttack() {
  let damage = calculateDamage(player, monster);
  monster.health -= damage;
  console.log(`${player.name} attacks ${monster.name} for ${damage} damage`);
}

function monsterAttack() {
  let damage = calculateDamage(monster, player);
  player.health -= damage;
  console.log(`${monster.name} attacks ${player.name} for ${damage} damage.`);
}

function getPlayerAction() {
  let action = prompt("Choose an action: 1)Attack 2)Defend");
  return action;
}

while (player.health > 0 && monster.health > 0) {
  let action = getPlayerAction();
  if (action === "1") {
    playerAttack();
  } else if (action === "2") {
    console.log(`${player.name} defends!`);
    player.defense += 2;
  }
  if (monster.health <= 0) {
    console.log(`${monster.name} has been defeated!`);
    break;
  }
  monsterAttack();
  if (player.health <= 0) {
    console.log(`${player.name} has been defeated!`);
    break;
  }
  if (action === "2") {
    player.defense -= 2;
  }
  console.log(`${player.name} Health: ${player.health}`);
  console.log(`${monster.name} Health: ${monster.health}`);
}
console.log("Game over!");
