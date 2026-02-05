ServerEvents.recipes(event => {
  // Crushing

  // Ochrum

  event.remove({ id: "createaddition:crushing/ochrum_recycling" })
  event.remove({ id: "create:crushing/ochrum_recycling" })
  event.remove({ id: "create:crushing/ochrum" })

  // Washing

  event.remove({ id: "create:splashing/red_sand" })
  event.remove({ id: "create:splashing/soul_sand" })
})