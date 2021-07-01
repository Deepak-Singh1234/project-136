function setup(){
    canvas = createCanvas(500,500);
    canvas.hide();
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 500 , 500);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("drdoomvsironman").innerHTML = "STATUS = object is being detected";
}

function modelLoaded(){
    console.log("mmmmmmmmmmmmooooooooooooooooooddddddddddddddddddddddddeeeeeeeeeeeeeeeeeelllllllllllllllllllllllLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLoooooooooooooooooooooooooooaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddd!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    status = true ;
}