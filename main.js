noseX="";
noseY="";

function preload(){
clown_nose= loadImage("https://i.postimg.cc/k5SptmS8/R.png");
}

function setup(){
canvas = createCanvas(390,300);
canvas.position(560,220);
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video,modelLoded);

poseNet.on("pose", getResult);
}

function draw(){
image(video,0,0,390,300);

image(clown_nose,noseX + 40,noseY - 10,40,40);


}

function snap(){
    save("clown-nose.png");
}

function modelLoded(){
    console.log("model loaded");
}

function getResult(results){
    if(results.length > 0){
      console.log(results);  

    noseX= results[0].pose.nose.x;
    console.log(noseX);

    noseY= results[0].pose.nose.y;
    console.log(noseY);
    }
}