var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shapes = (function () {
    function Shapes() {
    }
    Shapes.prototype.getImage = function () {
        return this.createImage();
    };
    Shapes.prototype.createImage = function () {
        var image = document.createElement(this.name);
        return image;
    };
    Shapes.prototype.playSound = function () {
        var sound = new Howl({
            urls: [this.soundfile],
            volume: 1.0,
            autoplay: true
        }).play;
    };
    return Shapes;
}());
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        _super.call(this);
        this.name = "circle";
        this.soundfile = 'sounds/drum.ogg';
    }
    return Circle;
}(Shapes));
var Cross = (function (_super) {
    __extends(Cross, _super);
    function Cross() {
        _super.call(this);
        this.name = "cross";
        this.soundfile = 'sounds/guitar.wav';
    }
    return Cross;
}(Shapes));
var Tile = (function () {
    function Tile(score) {
        this.table = null;
        this.status = false;
        this.counter = 0;
        this.cross = new Cross;
        this.circle = new Circle;
        this.score = score;
        this.turn = document.createElement('div');
        this.turn.setAttribute('class', 'turn');
        this.turn.appendChild(this.cross.getImage());
        document.body.appendChild(this.turn);
    }
    Tile.prototype.tableCreator = function () {
        this.table = document.createElement("table");
        document.body.appendChild(this.table);
    };
    Tile.prototype.tileCreator = function () {
        this.table.innerHTML = "";
        for (var x = 0; x < 3; x++) {
            var tr = document.createElement("tr");
            for (var i = 0; i < 3; i++) {
                var tile = document.createElement("td");
                tile.setAttribute("class", "unclicked");
                tile.id = x + "_" + i;
                tr.appendChild(tile);
                tile.addEventListener('click', this.clickHandler.bind(this));
            }
            this.table.appendChild(tr);
        }
    };
    Tile.prototype.clickHandler = function (e) {
        if (e.target.className != "unclicked") {
            console.log("Full");
        }
        else {
            if (this.status) {
                this.turn.innerHTML = "";
                this.turn.appendChild(this.cross.getImage());
                e.target.appendChild(this.circle.getImage());
                e.target.setAttribute("class", "clickedO");
                this.status = false;
                this.circle.playSound();
            }
            else {
                this.turn.innerHTML = "";
                this.turn.appendChild(this.circle.getImage());
                e.target.appendChild(this.cross.getImage());
                e.target.setAttribute("class", "clickedX");
                this.status = true;
                this.cross.playSound();
            }
            this.counter++;
            this.tileInit();
        }
    };
    Tile.prototype.tileInit = function () {
        this.tile1 = document.getElementById("0_0");
        this.tile2 = document.getElementById("0_1");
        this.tile3 = document.getElementById("0_2");
        this.tile4 = document.getElementById("1_0");
        this.tile5 = document.getElementById("1_1");
        this.tile6 = document.getElementById("1_2");
        this.tile7 = document.getElementById("2_0");
        this.tile8 = document.getElementById("2_1");
        this.tile9 = document.getElementById("2_2");
        this.checker();
    };
    Tile.prototype.checker = function () {
        if (this.tile1.className == "clickedX" && this.tile2.className == "clickedX" && this.tile3.className == "clickedX") {
            this.endScreen("X");
        }
        else if (this.tile1.className == "clickedO" && this.tile2.className == "clickedO" && this.tile3.className == "clickedO") {
            this.endScreen("O");
        }
        else if (this.tile4.className == "clickedX" && this.tile5.className == "clickedX" && this.tile6.className == "clickedX") {
            this.endScreen("X");
        }
        else if (this.tile4.className == "clickedO" && this.tile5.className == "clickedO" && this.tile6.className == "clickedO") {
            this.endScreen("O");
        }
        else if (this.tile7.className == "clickedX" && this.tile8.className == "clickedX" && this.tile9.className == "clickedX") {
            this.endScreen("X");
        }
        else if (this.tile7.className == "clickedO" && this.tile8.className == "clickedO" && this.tile9.className == "clickedO") {
            this.endScreen("O");
        }
        else if (this.tile1.className == "clickedX" && this.tile4.className == "clickedX" && this.tile7.className == "clickedX") {
            this.endScreen("X");
        }
        else if (this.tile1.className == "clickedO" && this.tile4.className == "clickedO" && this.tile7.className == "clickedO") {
            this.endScreen("O");
        }
        else if (this.tile2.className == "clickedX" && this.tile5.className == "clickedX" && this.tile8.className == "clickedX") {
            this.endScreen("X");
        }
        else if (this.tile2.className == "clickedO" && this.tile5.className == "clickedO" && this.tile8.className == "clickedO") {
            this.endScreen("O");
        }
        else if (this.tile3.className == "clickedX" && this.tile6.className == "clickedX" && this.tile9.className == "clickedX") {
            this.endScreen("X");
        }
        else if (this.tile3.className == "clickedO" && this.tile6.className == "clickedO" && this.tile9.className == "clickedO") {
            this.endScreen("O");
        }
        else if (this.tile1.className == "clickedX" && this.tile5.className == "clickedX" && this.tile9.className == "clickedX") {
            this.endScreen("X");
        }
        else if (this.tile1.className == "clickedO" && this.tile5.className == "clickedO" && this.tile9.className == "clickedO") {
            this.endScreen("O");
        }
        else if (this.tile3.className == "clickedX" && this.tile5.className == "clickedX" && this.tile7.className == "clickedX") {
            this.endScreen("X");
        }
        else if (this.tile3.className == "clickedO" && this.tile5.className == "clickedO" && this.tile7.className == "clickedO") {
            this.endScreen("O");
        }
        else if (this.counter > 8) {
            this.endScreen("Draw");
        }
    };
    Tile.prototype.endScreen = function (winner) {
        this.div = document.createElement("div");
        this.div.setAttribute("class", "background");
        document.body.appendChild(this.div);
        this.link = document.createElement("div");
        this.link.setAttribute("class", "link");
        if (winner == "Draw") {
            this.link.innerHTML = "Draw! </br>";
        }
        else {
            if (winner == "X") {
                this.score.player1 += 1;
                this.link.innerHTML = "Guitar wins!               ";
            }
            else {
                this.score.player2 += 1;
                this.link.innerHTML = "Drums win!  ";
            }
        }
        document.body.appendChild(this.link);
        this.button = document.createElement("button");
        this.button.setAttribute("class", "button");
        this.button.innerHTML = "Play again!";
        this.button.addEventListener('click', this.playAgain.bind(this));
        this.link.appendChild(this.button);
    };
    Tile.prototype.playAgain = function () {
        this.div.remove();
        this.link.remove();
        this.button.remove();
        this.counter = 0;
        this.table.remove();
        console.log(this.score.player1, this.score.player2);
        new Game(this.score);
    };
    return Tile;
}());
var Game = (function () {
    function Game(score) {
        var tile = new Tile(score);
        var playerOne = document.createElement('div');
        playerOne.setAttribute("class", "playerOne");
        playerOne.innerHTML = "Player 1: " + score.player1;
        document.body.appendChild(playerOne);
        var playerTwo = document.createElement('div');
        playerTwo.setAttribute("class", "playerTwo");
        playerTwo.innerHTML = "Player 2: " + score.player2;
        document.body.appendChild(playerTwo);
        tile.tableCreator();
        tile.tileCreator();
    }
    return Game;
}());
var Score = (function () {
    function Score() {
        this.player1 = 0;
        this.player2 = 0;
    }
    return Score;
}());
window.addEventListener("load", function () {
    var div = document.createElement("div");
    div.setAttribute("class", "start");
    document.body.appendChild(div);
    var link = document.createElement("div");
    link.setAttribute("class", "link");
    link.innerHTML = "Start!";
    div.appendChild(link);
    link.addEventListener('click', startGame);
    function startGame() {
        var sound = new Howl({
            urls: ['sounds/explosion.wav'],
            volume: 1.0,
            autoplay: true
        }).play;
        var score = new Score();
        new Game(score);
        div.remove();
        link.remove();
    }
});
//# sourceMappingURL=main.js.map