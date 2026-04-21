/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates hand tracking on live video through ml5.handPose.
 */

let handPose;
let faceMesh;
let video;
let hands = [];
let faces = [];
let connections;

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
  faceMesh = ml5.faceMesh();
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  faceMesh.detectStart(video, gotFaces);
  connections = handPose.getConnections();
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j in connections)
    {
        let keypoint = hand.keypoints[connections[j][0]];
        let keypoint1 = hand.keypoints[connections[j][1]];
        stroke('#008080');
        strokeWeight(20);
        line(keypoint.x, keypoint.y, keypoint1.x, keypoint1.y);
    }
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];

      if ( (j-1) % 4 == 0 || j == 0)
        fill(255, 255, 0);
      else
        fill('#FF0000');

      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }


    // Draw all the tracked face points
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    for (let j = 0; j < face.keypoints.length; j++) {
      let keypoint = face.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 5);
    }
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}
