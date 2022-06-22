import {
    world
} from "mojang-minecraft"

world.events.beforeItemUseOn.subscribe(data => {
  const pl = data.source
  const it = data.item
  const blLoc = data.blockLocation
  const bl = world.getDimension(pl.dimension.id).getBlock(blLoc)
  if (bl.id === "minecraft:chest") {
    data.cancel = true
    pl.runCommand('say ' + pl.name)
  }
})