controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (miner.isHittingTile(CollisionDirection.Bottom)) {
        miner.vy = -1000
    }
})
let miner: Sprite = null
miner = sprites.create(img`
    . . . . f f f f f . 5 5 5 . . . 
    . . . . f 5 5 5 f 1 5 5 . . . . 
    . . . . f f f f f f f f 5 . . . 
    . . . . f 9 d 9 f . . . . . . . 
    . . . . f d d d f . . . . . . . 
    . . . . f 9 9 9 f . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . f f f e e e f f f . . . . . 
    . . f . f e e e f . f . . . . . 
    . . f . f e e e f . f . . . . . 
    . . f . f e e e f . f . . . . . 
    . . f . f e e e f . f . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . f . . . f . . . . . . . 
    . . . . f . . . f . . . . . . . 
    . . . . f . . . f . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`underground`)
controller.moveSprite(miner, 100, 0)
miner.ay = 1000
tiles.placeOnRandomTile(miner, assets.tile`myTile4`)
scene.cameraFollowSprite(miner)
