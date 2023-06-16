// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    //% fixedInstance jres blockIdentity=images._tile
    export const chickencoop_tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "mushroomFarmInside":
            case "级别1":return tiles.createTilemap(hex`0a0008000104040404040404040503080808080808080806030808080808080808060308080808080808080603080808080808080806030808080808080808060200000000000000000700000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
            case "chickCoopInside":
            case "级别1":return tiles.createTilemap(hex`0d0008000104040404040404040404040502090909090909090909090906020909090909090909090909060209090909090909090909090602090909090909090909090906020909090909090909090909060209090909090909090909090603070707070000070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 2 2 2 2 . . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.floorDark2,myTiles.chickencoop_tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16": return transparency16;
            case "myTile":
            case "tile5":return chickencoop_tile5;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
