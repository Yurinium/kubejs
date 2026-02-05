const WOOD_TYPES = [
  "oak",
  "spruce",
  "birch",
  "jungle",
  "acacia",
  "dark_oak",
  "mangrove",
  "cherry",
]

const STEM_TYPES = [
  "crimson",
  "warped",
]

const WOOD_AND_STEM_TYPES = []
  .concat(WOOD_TYPES)
  .concat(STEM_TYPES)

/**
 * @callback generateWoodCallback
 * @param { string } woodType Type of wood
 * @returns { string }
 */

/**
 * Generate a list of strings according to wood and stem type
 * @param { generateWoodCallback } callback  A callback function that returns a string
 * @returns { string[] }
 */
function generateWoodAndStem(callback) {
  let generated = []
  WOOD_AND_STEM_TYPES.forEach(woodType => generated.push(callback(woodType)))
  return generated
}

/**
 * Generate a list of strings according to wood type
 * @param { generateWoodCallback } callback  A callback function that returns a string
 * @returns { string[] }
 */
function generateWood(callback) {
  let generated = []
  WOOD_TYPES.forEach(woodType => generated.push(callback(woodType)))
  return generated
}

/**
 * Generate a list of strings according to stem type
 * @param { generateWoodCallback } callback  A callback function that returns a string
 * @returns { string[] }
 */
function generateStem(callback) {
  let generated = []
  STEM_TYPES.forEach(woodType => generated.push(callback(woodType)))
  return generated
}