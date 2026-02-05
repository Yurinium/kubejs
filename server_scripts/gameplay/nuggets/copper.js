ServerEvents.recipes(event => {
  // Crushing

  // Veridium
  event.remove({ id: "create:crushing/veridium" })
  event.remove({ id: "create:crushing/veridium_recycling" })

  // Prismarine
  event.remove({ id: "create_aquatic_ambitions:crushing/prismarine_bricks_to_lapis_and_copper" })

  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "item": "minecraft:prismarine_bricks"
    }],
    "processing_time": 150,
    "results": [
      {
        "chance": 0.9,
        "id": "minecraft:lapis_lazuli"
      },
      {
        "count": 2,
        "id": "create:experience_nugget"
      },
      {
        "chance": 0.5,
        "id": "create:experience_nugget"
      }
    ]
  })
  
})