onEvent('item.registry', e => {
	e.create('cobalt_pieces').displayName('鈷碎片')
})

onEvent('block.registry', e => {
	e.create('fluorite_block').displayName('氟方塊').material('ice').hardness(1.2)
	e.create('lithium_block').displayName('鋰方塊').material('iron').hardness(1)
	e.create('magical_soil').displayName('§b魔力土').material('grass').hardness(0.6);
})
