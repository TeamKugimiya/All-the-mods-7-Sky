
onEvent('item.tooltip', e => { 
  //AllTheModium
    e.add('allthemodium:teleport_pad',[
      Text.of('將傳送台擺放在指定維度'), 
      Text.of('兩手為空時，對著傳送台「潛行 + 點擊右鍵」來進行傳送'),
      Text.of('§a擺放在主世界時，能傳送到§m挖礦維度§4 已被停用').red(),
      Text.of('§c擺放在地獄時，能傳送到異獄').red()
    ])

  //Mekanism
    e.add('mekanism:creative_energy_cube', [ [Text.of('需要使用充能室充能').darkPurple()],])

  //Mystical agriculture
    e.add('mysticalagriculture:watering_can',[ [Text.of('僅能由玩家手動使用').green()],[Text.of('無法自動化').darkGreen()]])
    e.add('mysticalagriculture:inferium_watering_can',[ [Text.of('僅能由玩家手動使用').green()],[Text.of('無法自動化').darkGreen()]])
    e.add('mysticalagriculture:prudentium_watering_can',[ [Text.of('僅能由玩家手動使用').green()],[Text.of('無法自動化').darkGreen()]])
    e.add('mysticalagriculture:tertium_watering_can',[ [Text.of('僅能由玩家手動使用').green()],[Text.of('無法自動化').darkGreen()]])
    e.add('mysticalagriculture:imperium_watering_can',[ [Text.of('僅能由玩家手動使用').green()],[Text.of('無法自動化').darkGreen()]])
    e.add('mysticalagriculture:supremium_watering_can',[ [Text.of('僅能由玩家手動使用').green()],[Text.of('無法自動化').darkGreen()]])
  
  //pipes
  e.add('pipez:item_pipe', [
    [Text.of('預設：'), ' ', Text.of('4'), ' ', Text.of('物品/20t')],
    [Text.of('基礎：'), ' ', Text.of('8'), ' ', Text.of('物品/15t')],
    [Text.of('中級：').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('物品/10t').gold()],
    [Text.of('高級：').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('物品/5t').darkAqua()],
    [Text.of('終極：').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('物品/t').darkGray()],
  ])
  e.add('pipez:fluid_pipe', [
    [Text.of('預設：'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('基礎：'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('中級：').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('高級：').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('終極：').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
  ])
  e.add('pipez:gas_pipe', [
    [Text.of('預設：'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('基礎：'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('中級：').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('高級：').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('終極：').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
  ])
  e.add('pipez:energy_pipe', [
    [Text.of('預設：'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('基礎：'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('中級：').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('高級：').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('終極：').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])

  //upgrades
  e.add('pipez:basic_upgrade', [
    [Text.of('物品：'), ' ', Text.of('8'), ' ', Text.of('物品/15t')],
    [Text.of('流體：'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('氣體：'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('能量：'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])
  e.add('pipez:improved_upgrade', [
    [Text.of('物品：').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('物品/10t').gold()],
    [Text.of('流體：').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('氣體：').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('能量：').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])
  e.add('pipez:advanced_upgrade', [
    [Text.of('物品：').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('物品/5t').darkAqua()],
    [Text.of('流體：').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('氣體：').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('能量：').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])
  e.add('pipez:ultimate_upgrade', [
    [Text.of('物品：').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('物品/t').darkGray()],
    [Text.of('流體：').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('氣體：').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('能量：').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])

})