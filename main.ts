function SetScore (miner1: Sprite, num: number) {
    if (num == 1) {
        CheckOre(miner1)
    } else if (num == 2) {
        CheckOre2(miner1)
    } else if (num == 3) {
        CheckOre3(miner1)
    } else if (num == 4) {
        CheckOre4(miner1)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (miner.isHittingTile(CollisionDirection.Bottom)) {
        miner.vy = -1000
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.down.isPressed()) {
        if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom))) {
            if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile1`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile2`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile2`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile3`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile3`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile5`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile5`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile6`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile6`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile7`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile7`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile8`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile8`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile9`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile9`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile10`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile10`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile11`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile11`)) {
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile`)
            } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile`)) {
                tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), false)
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`cave background`)
            } else {
                SetScore(miner, 1)
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Bottom), assets.tile`myTile1`)
            }
        }
    }
    if (controller.up.isPressed()) {
        if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Top))) {
            if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Top), assets.tile`myTile`)) {
                tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Top), false)
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Top), assets.tile`cave background`)
            } else {
                SetScore(miner, 2)
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Top), assets.tile`myTile`)
            }
        }
    }
    if (controller.left.isPressed()) {
        if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Left))) {
            if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Left), assets.tile`myTile`)) {
                tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Left), false)
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Left), assets.tile`cave background`)
            } else {
                SetScore(miner, 3)
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Left), assets.tile`myTile`)
            }
        }
    }
    if (controller.right.isPressed()) {
        if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Right))) {
            if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Right), assets.tile`myTile`)) {
                tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Right), false)
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Right), assets.tile`cave background`)
            } else {
                SetScore(miner, 4)
                tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(miner), CollisionDirection.Right), assets.tile`myTile`)
            }
        }
    }
})
function CheckOre (mySprite: Sprite) {
    if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`white cristal ore0`)) {
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`black cristal ore0`)) {
        info.changeScoreBy(5)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`blue cristal ore0`)) {
        info.changeScoreBy(10)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`green cristal ore0`)) {
        info.changeScoreBy(15)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`yellow cristal ore0`)) {
        info.changeScoreBy(20)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`orange cristal ore0`)) {
        info.changeScoreBy(30)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`red cristal ore0`)) {
        info.changeScoreBy(50)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`purple cristal ore0`)) {
        info.changeScoreBy(100)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`pink cristal ore0`)) {
        info.changeScoreBy(150)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`brown cristal ore0`)) {
        info.changeScoreBy(500)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`brown cristal ore`)) {
        info.changeScoreBy(1000)
    }
}
function CheckOre4 (mySprite: Sprite) {
    if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`white cristal ore0`)) {
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`black cristal ore0`)) {
        info.changeScoreBy(5)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`blue cristal ore0`)) {
        info.changeScoreBy(10)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`green cristal ore0`)) {
        info.changeScoreBy(15)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`yellow cristal ore0`)) {
        info.changeScoreBy(20)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`orange cristal ore0`)) {
        info.changeScoreBy(30)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`red cristal ore0`)) {
        info.changeScoreBy(50)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`purple cristal ore0`)) {
        info.changeScoreBy(100)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`pink cristal ore0`)) {
        info.changeScoreBy(150)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`brown cristal ore0`)) {
        info.changeScoreBy(500)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Right), assets.tile`brown cristal ore`)) {
        info.changeScoreBy(1000)
    }
}
function CheckOre3 (mySprite: Sprite) {
    if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`white cristal ore0`)) {
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`black cristal ore0`)) {
        info.changeScoreBy(5)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`blue cristal ore0`)) {
        info.changeScoreBy(10)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`green cristal ore0`)) {
        info.changeScoreBy(15)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`yellow cristal ore0`)) {
        info.changeScoreBy(20)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`orange cristal ore0`)) {
        info.changeScoreBy(30)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`red cristal ore0`)) {
        info.changeScoreBy(50)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`purple cristal ore0`)) {
        info.changeScoreBy(100)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`pink cristal ore0`)) {
        info.changeScoreBy(150)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`brown cristal ore0`)) {
        info.changeScoreBy(500)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Left), assets.tile`brown cristal ore`)) {
        info.changeScoreBy(1000)
    }
}
function CheckOre2 (mySprite: Sprite) {
    if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`white cristal ore0`)) {
        info.changeScoreBy(1)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`black cristal ore0`)) {
        info.changeScoreBy(5)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`blue cristal ore0`)) {
        info.changeScoreBy(10)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`green cristal ore0`)) {
        info.changeScoreBy(15)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`yellow cristal ore0`)) {
        info.changeScoreBy(20)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`orange cristal ore0`)) {
        info.changeScoreBy(30)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`red cristal ore0`)) {
        info.changeScoreBy(50)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`purple cristal ore0`)) {
        info.changeScoreBy(100)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`pink cristal ore0`)) {
        info.changeScoreBy(150)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`brown cristal ore0`)) {
        info.changeScoreBy(500)
    } else if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Top), assets.tile`brown cristal ore`)) {
        info.changeScoreBy(1000)
    }
}
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
info.setScore(0)
