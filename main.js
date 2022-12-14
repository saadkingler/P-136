status = "";
function preload()
{

}

function setup()
{
    canvas = createCanvas(380,250);
    canvas.position(500,280)
    video = createCapture(380,250);
    video.hide();
}

function draw()
{
    image(video,0,0,380,250);
}

function start()
{
    detector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelloaded()
{
    console.log("Model loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(1);
    document.getElementById(id_of_the_input_box).value();
}