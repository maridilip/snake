var canv = document.getElementById('myCanvas'),
    ctx = canv.getContext('2d');
var symbolSize = 24;
var fps = 17,
    streams = [],
    x = 0,
    y = 0;
for (var i = 0; i <= canv.width / symbolSize; i++) {
    stream = new Stream();
    stream.generateSymbols(x, y);
    streams.push(stream);
    x += symbolSize;
}
console.log(streams);

function Symbol(x, y, speed) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;

    this.setRandomSymbol = function() {
        this.value = String.fromCharCode(0x30A0 + Math.random() * (96 - 0) + 0);
    }



    this.rain = function() {
        this.y = this.y >= canv.height ? this.y = 0 : this.y += this.speed;

    }
}

function Stream() {
    this.symbols = [];
    this.totalSymbols = Math.round(Math.random() * (30 - 5) + 5);
    //console.log(this.totalSymbols)
    //this.totalSymbols=24;
    this.speed = Math.round(Math.random() * (22 - 5) + 5);

    this.speed = Math.random() * (20 - 5) + 5;
    this.generateSymbols = function(x, y) {
        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x, y, this.speed);
            symbol.setRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize;
            //console.log(this.symbols)

        }

        //console.log(this.symbols.length);
    }
    this.show = function() {
        this.symbols.forEach(function(sym) {
            //ctx.clearRect(0, 0, canv.width, canv.height);
            ctx.font = symbolSize + "px Arial";
            ctx.fillStyle = "rgba(0,255,70,1)";
            //console.log(sym.value);
            ctx.fillText(sym.value, sym.x, sym.y);
            sym.rain();
            sym.setRandomSymbol();

        })

    }

}


//console.log(canv.width)
function draw() {
ctx.clearRect(0, 0, canv.width, canv.height);
    streams.forEach(function(stream) {
        stream.show();
    })

    requestAnimationFrame(draw);
    // Drawing code goes here

}

draw();

//canv.addEventListener('mousemove', function(e){
//   bubbles.push(new Bubble(e.pageX,e.pageY))
//});