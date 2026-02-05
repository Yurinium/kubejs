RecipeViewerEvents.removeEntries("item", event => {
  // Crayfish
  event.remove( "#refurbished_furniture:chairs" )
  event.remove( "#refurbished_furniture:tables" )
  event.remove( "#refurbished_furniture:drawers" )
  event.remove( "#refurbished_furniture:wooden_kitchen_drawers" )
  event.remove( "#refurbished_furniture:coloured_kitchen_drawers" )
  event.remove( "#refurbished_furniture:sofas" )

  // Let's Do Furniture
  event.remove( "#furniture:sofas" )
  event.remove( "#furniture:lamps" )
  event.remove( "#furniture:chairs" )

  // Handcrafted
  event.remove( "#handcrafted:drawers" )
  event.remove( "#handcrafted:shelves" )
  event.remove( "#handcrafted:counters" )
  event.remove( "#handcrafted:cupboards" )

  // Create: Connected
  event.remove( 'create_connected:copycat_block' )
  event.remove( 'create_connected:copycat_slab' )
  event.remove( 'create_connected:copycat_beam' )
  event.remove( 'create_connected:copycat_vertical_step' )
  event.remove( 'create_connected:copycat_stairs' )
  event.remove( 'create_connected:copycat_fence' )
  event.remove( 'create_connected:copycat_fence_gate' )
  event.remove( 'create_connected:copycat_wall' )
  event.remove( 'create_connected:copycat_board' )
  event.remove( 'create_connected:copycat_box' )
  event.remove( 'create_connected:copycat_catwalk' )

  // Create Deco
  event.remove( "#createdeco:coins" )
  event.remove( "#createdeco:coinstacks" )

  // Create Encased
  event.remove( "#createcasing:shadow_steel_cased" )
  event.remove( "#createcasing:refined_radiance_cased" )
  event.remove( "#createcasing:creative_cased" )
  event.remove( "createcasing:creative_casing" )
  event.remove( "createcasing:chorium_ingot" )

  // Unusual Furniture
  event.remove( "#unusual_furniture:sofas'createmetalwork:crushed_andesite'" )
  event.remove( "#unusual_furniture:drawers" )
})