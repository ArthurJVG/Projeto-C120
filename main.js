Webcam.set({
    width:350,
    height:300,
    imageFormat : 'png',
    pngQuality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);


classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kadYNklEw/model.json',modelLoaded);

    function modelLoaded() {
        console.log('Model Loaded!') ;
    }

    function speak(){
        var synth = window.speechSynthesis;
        speakData1 = "A primeira previsão é" + prediction1;
        speakData2 = "E a segunda previsão é" +prediction2;
        var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
        synth.speak(utterThis);
    }
