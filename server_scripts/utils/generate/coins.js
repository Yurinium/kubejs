const COIN_TYPES = [
  "gold",
  "netherite",
  "brass",
  "iron",
  "copper",
  "industrial_iron",
  "zinc",
]

/**
 * Generates Create Deco coin and coinstack ids.
 * @returns { {coins: string[], coinstacks: string[]} }
 */
function generateCoin() {
  let coins = []
  let coinstacks = []
  COIN_TYPES.forEach(coinType => {
    let str = `createdeco:${coinType}_coin`
    coins.push(str)
    coinstacks.push(str + "stack")
  });
  return { coins: coins, coinstacks: coinstacks }
}