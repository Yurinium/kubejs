// Remove iron nugget recipes

ServerEvents.recipes(event => {
  // Crushing

  // Crimsite
  event.remove({ id: "create:crushing/crimsite" })
  event.remove({ id: "create:crushing/crimsite_recycling" })

  // Tuff (ts aint tuf)
  event.remove({ id: "create:crushing/tuff" })
  event.remove({ id: "create:crushing/tuff_recycling" })
  event.remove({ id: "createaddition:crushing/tuff_recycling" })

  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "item": "minecraft:tuff"
    }],
    "processing_time": 350,
    "results": [{
      "chance": 0.25,
      "id": "minecraft:flint"
    }]
  })

  event.custom({
    "type": "create:crushing",
    "ingredients": [{
      "tag": "create:stone_types/tuff"
    }],
    "processingTime": 350,
    "results": [{
      "chance": 0.25,
      "id": "minecraft:flint"
    }]
  })

  // Washing

  // Gravel
  event.remove({ id: "create:splashing/gravel" })

  event.custom({
    "type": "create:splashing",
    "ingredients": [{
      "item": "minecraft:gravel"
    }],
    "results": [{
      "chance": 0.25,
      "id": "minecraft:flint"
    }]
  })
})