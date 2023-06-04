function preload() {}

function setup() {
  canvas = createCanvas(640,480);
  canvas.position(300,300);

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
    
    image(video,10,10,640,480);
}

function Take_snapshot() {
    save('AAHIL_LOHIYA_1.png');
}
