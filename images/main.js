var Circle = (function () {
    function Circle() {
        var div = document.createElement("circle");
        document.body.appendChild(div);
    }
    return Circle;
}());
var Cross = (function () {
    function Cross() {
        var div = document.createElement("cross");
        document.body.appendChild(div);
    }
    return Cross;
}());
var Tile = (function () {
    function Tile() {
        var div = document.createElement("table");
        document.body.appendChild(div);
    }
    Tile.prototype.tileCreator = function () {
        for (var i = 0; i < 10; i++) {
            var tile = document.createElement("tile");
            document.body.appendChild(tile);
            console.log('HALLO?');
        }
    };
    return Tile;
}());
var Game = (function () {
    function Game() {
        var circle = new Circle();
        var cross = new Cross();
        var tile = new Tile();
        tile.tileCreator();
    }
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map