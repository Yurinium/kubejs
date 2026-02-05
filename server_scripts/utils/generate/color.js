const COLORS = [
  "white",
  "light_gray",
  "gray",
  "black",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "cyan",
  "light_blue",
  "blue",
  "purple",
  "magenta",
  "pink",
  "brown",
]

/**
 * @callback generateColorCallback
 * @param { string } color Color name
 * @returns { string }
 */

/**
 * Generate a list of strings according to color
 * @param { generateColorCallback } callback  A callback function that returns a string
 * @returns { string[] }
 */
function generateColor(callback) {
  let generated = []
  COLORS.forEach(color => generated.push(callback(color)))
  return generated
}