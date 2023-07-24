// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    //% fixedInstance jres blockIdentity=images._tile
    export const chickencoop_tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function (name: string) {
        switch (helpers.stringTrim(name)) {
            case "mushroomFarmInside":
            case "级别1": return tiles.createTilemap(hex`0a0008000104040404040404040503080808080808080806030808080808080808060308080808080808080603080808080808080806030808080808080808060200000000000000000700000000000000000000`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
. . . . . . . . . . 
`, [myTiles.transparency16, sprites.builtin.forestTiles5, sprites.builtin.forestTiles13, sprites.builtin.forestTiles9, sprites.builtin.forestTiles6, sprites.builtin.forestTiles7, sprites.builtin.forestTiles11, sprites.builtin.forestTiles15, sprites.builtin.forestTiles10], TileScale.Sixteen);
            case "hxy级别5":
            case "级别5": return tiles.createTilemap(hex`1000100002020202020202020202020202020202010101010101010104010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030303010101010101`, img`
2 2 2 2 2 2 2 . . . 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16, sprites.dungeon.darkGroundNorthWest1, sprites.dungeon.stairLadder, sprites.dungeon.doorOpenNorth, sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "zzh级别4":
            case "级别4": return tiles.createTilemap(hex`10001000010707070707070707070707070707020809090909090909090909090909090608090909090909090909090909090906080909090909090909090909090909060809090909090909090909090909090608090909090909090909090909090906080909090909090909090909090909060809090a0a09090909090909090909060809090909090909090909090909090608090909090909090909090909090906080909090909090909090909090909060809090909090909090909090909090608090909090909090909090909090906080909090909090909090909090909060809090909090909090909090909090603050505050505050505050505050504`, img`
. . . . . . . . . . 2 . 2 . . . 
. . . . . . . . . . 2 . 2 . . . 
. . . . . . . . . . 2 . 2 . . . 
. . . . . . . . . . 2 . 2 . . . 
. . . . . . . . . . 2 . 2 . . . 
. . . . . . . . . . 2 . 2 . . . 
. . . . . . . . . . 2 . 2 . . . 
. . . . . . . . . . 2 . 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16, sprites.castle.tilePath1, sprites.castle.tilePath3, sprites.castle.tilePath7, sprites.castle.tilePath9, sprites.castle.tilePath8, sprites.castle.tilePath6, sprites.castle.tilePath2, sprites.castle.tilePath4, sprites.castle.tilePath5, sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "chickCoopInside":
            case "级别1": return tiles.createTilemap(hex`0d0008000104040404040404040404040502090909090909090909090906020909090909090909090909060209090909090909090909090602090909090909090909090906020909090909090909090909060209090909090909090909090603070707070000070707070708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 
2 2 2 2 2 . . 2 2 2 2 2 2 
`, [myTiles.transparency16, sprites.dungeon.purpleOuterNorthWest, sprites.dungeon.purpleOuterWest0, sprites.dungeon.purpleOuterSouthEast, sprites.dungeon.purpleOuterNorth0, sprites.dungeon.purpleOuterNorthEast, sprites.dungeon.purpleOuterEast1, sprites.dungeon.purpleOuterSouth1, sprites.dungeon.purpleOuterSouthWest, sprites.dungeon.floorDark2, myTiles.chickencoop_tile5], TileScale.Sixteen);
            case "da_级别2":
            case "级别2":return tiles.createTilemap(hex`0a0008000101010101010101010101020202020202020201010202020202020202010102020202020202020101020202020202020201010402050206020202010102020202020202020101010103030303010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 . . . . 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter,sprites.castle.tileGrass3,myTiles.tile8,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        
        }
        return null;
    })

    helpers._registerFactory("tile", function (name: string) {
        switch (helpers.stringTrim(name)) {
            case "transparency16": return transparency16;
            case "myTile":
            case "tile5": return chickencoop_tile5;
            case "myTile2":
            case "tile11":return tile11;
            case "myTile":
            case "tile8":return tile8;
            case "myTile1":
            case "tile10":return tile10;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
