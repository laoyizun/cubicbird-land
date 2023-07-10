game.pushScene()
scene_util.captureRegisteringRoomScenes(()=>{
    chickcoop.prepareChickCoop()
    game.popScene()
})

scene_util.captureRegisteringRoomScenes(() => {
    mushroomfarm.prepare_mushroomfarm()
    game.popScene()
})

scene_util.captureRegisteringRoomScenes(() => {
    test01.prepare_test01()
    game.popScene()
})

scene_util.captureRegisteringRoomScenes(() => {
    test02.prepare_test02()
    game.popScene()
})


cbland.startVillage(false)