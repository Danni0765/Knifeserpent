function preload() {
    
}

function setup() {
 video= createCapture(VIDEO);
 video.size(550, 500);
 canvas=createCanvas(550, 400);
 canvas.position(560, 120);
 poseNet=ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function draw() {
    background("cornflowerblue");
}

function modelLoaded() {
    console.log("Model Is Loaded!");    
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
    }    
}