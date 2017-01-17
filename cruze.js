var value = [3,3,3,3];
var chain = [];
var total = 4;
var degree = 60;
var generator;
var poke = 1;
var length = 0;
function init(){
    for(i = 1;i < 10;i++){
        degree += 27;
        document.getElementById(i).style.top = degree + "px";
        document.getElementById(i).style.left = length + "px";
        length += 150;
        
        
    }
    
    generator = Math.floor((Math.random() * 25) + 10);
    chain[1] =  setInterval(function(){ move(1) }, generator);
    generator = Math.floor((Math.random() * 12) + 10);
    chain[2] =  setInterval(function(){ move(2) }, generator);
    generator = Math.floor((Math.random() * 25) + 10);
    chain[3] =  setInterval(function(){ move(3) }, generator);
    generator = Math.floor((Math.random() * 15) + 10);
    chain[4] =  setInterval(function(){ move(4) }, generator);
    generator = Math.floor((Math.random() * 25) + 10);
    chain[5] =  setInterval(function(){ move(5) }, generator);
    generator = Math.floor((Math.random() * 15) + 10);
    chain[6] =  setInterval(function(){ move(6) }, generator);
    generator = Math.floor((Math.random() * 25) + 10);
    chain[7] =  setInterval(function(){ move(7) }, generator);
    generator = Math.floor((Math.random() * 15) + 10);
    chain[8] =  setInterval(function(){ move(8) }, generator);
    generator = Math.floor((Math.random() * 20) + 10);
    chain[9] =  setInterval(function(){ move(9) }, generator);
   

   
}

function move(etc){
    var length = document.getElementById("peep").offsetWidth-50;
   if(value[etc] < length) value[etc] += 3;
   else value[etc] = 0;
    document.getElementById(etc).style.left = value[etc] + "px";
     
}

init();

