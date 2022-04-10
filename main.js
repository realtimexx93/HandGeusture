Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
}); 

camera = document.getElementById("camera");

Webcam.attach ('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:', ml5.verison);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JXDP3ya3f/model.json',modelLoaded);


function modelLoaded() {
    console.log('Model Loaded!');
}
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult); 
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak()
    
        }
        if(results[0].label == "victory")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9996;";

        }
        if(results[0].label == "best")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128077;";

        }
        if(results[0].label == "amazing")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";


        }
        
        
    }