var nose_x = 0 ;
var nose_y = 0;
var left_wrist = 0;
var right_wrist = 0;
var difference = 0;
function setup( ) {
    canvas = createCanvas(800,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600,700);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("model is loaded");
    console.log(Math.floor(2.8));
    console.log(Math.ceil(2.8));
    console.log(Math.round(2.8));
}
function gotPoses(results) {
    
    if(results.length > 0 ) {
        console.log(results);
      nose_x =  results[0].pose.nose.x;
      nose_y =  results[0].pose.nose.y;
      left_wrist = results[0].pose.leftWrist.x;
      right_wrist = results[0].pose.rightWrist.x;
      difference = Math.round(left_wrist - right_wrist);
      console.log(difference);
    }
}
function draw() {
    fill("red");
    stroke("white");
    canvas.clear();
    square(nose_x, nose_y,difference);
    textSize(40);
    text("text",400,300,);
    
}
