song = "";
song1 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
     song = loadSound("music.mp3")
     song = loadSound("music2.mp3")
}
function setup()
{
     canvas =   createCanvas(600,500);
     canvas.center();
     video = createCapture(VIDEO);
     video.hide();

     poseNet =  ml5.poseNet(modelLoaded,video)
     poseNet.on("pose",gotPosses)

}
function gotPosses(results)
{
     if(results.length > 0)
     {
          console.log(results);
          scoreLeftWrist = results[0].pose.keypoints[9].score;
          console.log("scoreLeftWrist = " + scoreLeftWrist);

          leftWristX = results.pose.leftWrist.x;
          leftWristY = results.pose.leftWrist.y;
          console.log("leftWristX = "+leftWristX+"; leftWristY ="+leftWristY);

          rightWristX = results.pose.rightWrist.x;
          rightWristY = results.pose.rightWrist.y;
          console.log("rightWristX"+rightWristX+"rightWristY  = "+rightWristY);

     
           
     }
}
function modelLoaded()
{
     console.log("poseNet is initialized")
}
function draw()
{
     image(video,0,0,600,500);
}