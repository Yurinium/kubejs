ServerEvents.tags("item", event => {
  // Crayfish
  event.add("refurbished_furniture:chairs", generateWoodAndStem(woodType => `refurbished_furniture:${woodType}_chair`))
  event.add("refurbished_furniture:tables", generateWoodAndStem(woodType => `refurbished_furniture:${woodType}_table`))
  event.add("refurbished_furniture:drawers", generateWoodAndStem(woodType => `refurbished_furniture:${woodType}_drawer`))

  // Let's Do Furniture
  event.add("furniture:sofas", generateColor(color => `furniture:sofa_${color}`))
  event.add("furniture:lamps", generateColor(color => `furniture:lamp_${color}`))
  event.add("furniture:chairs", generateWood(woodType => `furniture:${woodType}_desk_chair`))

  // Create Deco
  const { coins, coinstacks } = generateCoin()
  event.add("createdeco:coins", coins)
  event.add("createdeco:coinstacks", coinstacks)

  // Create Encased
  event.add("createcasing:shadow_steel_cased", generateCreateEncased("shadow_steel"))
  event.add("createcasing:refined_radiance_cased", generateCreateEncased("refined_radiance"))
  event.add("createcasing:creative_cased", generateCreateEncased("creative"))

  // Unusual Furniture
  event.add("unusual_furniture:sofas", generateColor(color => `unusual_furniture:${color}_sofa`))
  event.add("unusual_furniture:drawers", generateWoodAndStem(woodType => `unusual_furniture:${woodType}_drawer`).concat("unusual_furniture:bamboo_drawer"))
})

ServerEvents.recipes(event => {
  // Crayfish
  event.remove({ output: "#refurbished_furniture:chairs" })
  event.remove({ output: "#refurbished_furniture:tables" })
  event.remove({ output: "#refurbished_furniture:drawers" })
  event.remove({ output: "#refurbished_furniture:wooden_kitchen_drawers" })
  event.remove({ output: "#refurbished_furniture:coloured_kitchen_drawers" })
  event.remove({ output: "#refurbished_furniture:sofas" })

  // Let's Do Furniture
  event.remove({ output: "#furniture:sofas" })
  event.remove({ output: "#furniture:lamps" })
  event.remove({ output: "#furniture:chairs" })

  // Handcrafted
  event.remove({ output: "#handcrafted:drawers" })
  event.remove({ output: "#handcrafted:shelves" })
  event.remove({ output: "#handcrafted:counters" })
  event.remove({ output: "#handcrafted:cupboards" })

  // Create: Connected
  // The copycat recipes are already handled by Create: Copycats+

  // Create Deco
  event.remove({ output: "#createdeco:coins" })
  event.remove({ output: "#createdeco:coinstacks" })

  // Create Encased
  event.remove({ output: "#createcasing:shadow_steel_cased" })
  event.remove({ output: "#createcasing:refined_radiance_cased" })
  event.remove({ output: "#createcasing:creative_cased" })
  event.remove({ output: "createcasing:creative_casing" })
  event.remove({ output: "createcasing:chorium_ingot" })

  // Unusual Furniture
  event.remove({ output: "#unusual_furniture:sofas" })
  event.remove({ output: "#unusual_furniture:drawers" })
})