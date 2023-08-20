Webcam.set({
    width:350, height:350, image_format:'png',png_quality:100
});
var cam = document.getElementById("webCam");
Webcam.attach(cam);

function capture()  {
    Webcam.snap(function(picSRC)  {
document.getElementById("pic").innerHTML = '<img id="picture" src=" '+picSRC+' "> ';
    });
}
var identify = ml5.imageClassifier('var identify = ml5.imageClassifier(',https,://teachablemachine.withgoogle.com/models/l1KvoGPoe/model.json',modelLoaded);
