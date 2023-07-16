function setup(){
canvas=createCanvas(500,500)
canvas.position(900,100)
cam=createCapture(VIDEO)
my_model=ml5.poseNet(cam,modelLoaded)
my_model.on('pose',gotPoses)
}
lwx = 0;
rwx = 0;
gap = 0;
nx = 0;
ny = 0;
fo = 0;

function modelLoaded(){
    console.log("UR MODEL HAS LODED")
}

function draw(){
background("black")
textSize(fo)
fill("white")
text("Reyanssh", nx, ny)
}

function gotPoses(results){
   if(results.length>0){
    lwx= results[0].pose.leftWrist.x
    rwx= results[0].pose.rightWrist.x
    nx= results[0].pose.nose.x
    ny= results[0].pose.nose.y
    gap = lwx-rwx
    fo= floor(gap)
   }
    
}