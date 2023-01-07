onEvent('mekanism.slurry.registry', event => {
	event.create("dirty_cobalt", "dirty").color(0x0043A5).ore('forge:ores/cobalt')
	event.create("clean_cobalt", "clean").color(0x0043A5).ore('forge:ores/cobalt')
})

onEvent('item.registry',event => {
    event.create('clump_cobalt').displayName('鈷碎塊')
    event.create('crystal_cobalt').displayName('鈷晶體')
    event.create('dirty_dust_cobalt').displayName('汙濁的鈷粉')
    event.create('dust_cobalt').displayName('鈷粉')
    event.create('shard_cobalt').displayName('鈷碎片')
})