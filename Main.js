status = "";
img = "";
objects = [];

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function preload() {
    alert = loadSound("mixkit-video-game-mystery-alert-234.wav");
}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();

}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(video, 0, 0, 380, 380);
   
    if (status != "") {
        for (var i = 0; i < objects.length; i++) {
            if (objects[i].label != "person") {
                alert.play();
                document.getElementById("number_of_objects").innerHTML = "baby not found"
                break
            }
        }
    }
    
}

