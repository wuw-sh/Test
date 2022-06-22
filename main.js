import {
    world,
    BlockLocation
} from "mojang-minecraft"

world.events.beforeItemUseOn.subscribe(data => {
  const pl = data.source
  const it = data.item
  const blLoc = data.blockLocation
  const bl = world.getDimension(pl.getDimension.id).getBlock(blLoc)
  if (bl.id === "minecraft:chest") {
    pl.runCommand('say ' + pl.name)
  }
})