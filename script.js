var canvas = document.createElement("Canvas");
canvas.width = 700;
canvas.height = 512;
document.body.append(canvas);
var ctx = canvas.getContext("2d");
var squarex = 10
var squarey = 10
var speed = 500
var keys = {}
var groundy = 210
var xvel = 0
var yvel = 0
var grav = 0.8
var slides = 700
var slided = 0
var slide = false


function gravity() {

     if (squarey < 200){
        yvel += grav
        squarey += yvel
     }else{
        yvel = 0

     };
        
}


addEventListener("keydown", event =>{
    keys[event.key] = true;
});
addEventListener("keyup", event =>{
    delete keys[event.key];
});

function render(mod, slided) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  if (slide == false){
    ctx.fillRect(squarex, squarey, 10, 25);
}
if (slide == true){
    ctx.fillRect(squarex, squarey+10, 10, 15);
}


}

function update(mod) {  // for physics 
    if (keys.a) {
        squarex -= speed*mod
    }
    if (keys.d) {
        squarex -= 0-(speed*mod)
    }
    if (keys.w) {
        if (squarey + yvel > 199){
            yvel -= 700*mod
        }
    }
    if (keys.s && slided < 30*mod) {
        slide = true
        slides -= 1500*mod
        slided += 1*mod
        if (keys.s != true){
        }
        console.log("crouch")
        if (keys.a) {
            squarex -= slides*mod
        }
        if (keys.d) {
            squarex -= 0-(slides*mod)
        }
    }else{
        slide = false
    }
    if (keys.s != true){
        slides = 700
        slided = 0
    }
    console.log(slided*mod)

    


   
     yvel += grav
    if (squarey + yvel > 200){
        yvel = 0
    }else{
 
    }


    squarex += xvel



    squarey += yvel

    //console.log(`x = ${squarex} y = ${squarey}`)
}


function main() {
  update((Date.now() - then) / 1000);
  render();
  then = Date.now()
  requestAnimationFrame(main);
}
var then = Date.now();
main();