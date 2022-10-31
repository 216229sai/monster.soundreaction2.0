//teachablemachine.withgoogle.com/models/MAn7fXvNa/

function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = m15.soundClassifier('//teachablemachine.withgoogle.com/models/MAn7fXvNa/', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}