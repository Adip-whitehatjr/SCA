function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tVhcalRbh/', modelReady);

}

function modelReady() {
    Classifier.Classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
}