// VISUEL
context = new AudioContext();
// set context for canvas(analyser - visual effect)
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 256;

// rainbow gradient and set fill style
var gradient = ctx.createLinearGradient(0, 0, 0, 256);
gradient.addColorStop(0, '#ff0000');
gradient.addColorStop(0.21, '#ff9a00');
gradient.addColorStop(0.27, '#d0de21');
gradient.addColorStop(0.38, '#4fdc4a');
gradient.addColorStop(0.49, '#3fdad8');
gradient.addColorStop(0.60, '#2fc9e2');
gradient.addColorStop(0.71, '#1c7fee');
gradient.addColorStop(0.82, '#5f15f2');
gradient.addColorStop(0.93, '#ba0cf8');
gradient.addColorStop(1, '#fb07d9');
ctx.fillStyle = gradient;

/* In order to be able to retrieve the output directly from the sound card, i.e. not via the microphone, 
a setting must be made. For Realtek: "Stereo mix" must be set for "Recording" in the sound settings. 
Otherwise it will only work via the microphone. */
var analyser = context.createAnalyser();
analyser.fftsize = 2048;
analyser.smoothingTimeConstant = 0.95;
navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
navigator.getMedia({
    audio: true,
    video: false
}, function(localMediaStream) {
    // connect audio nodes
    source = context.createMediaStreamSource(localMediaStream);
    source.connect(analyser)
    draw();
}, function(err) {
    console.log(err);
});

function draw() {
    // get frequency data from analyser node
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    var visual = document.getElementById("canvas");

    ctx.clearRect(0, 0, visual.width, 256);
    for (var i = 0; i < bufferLength; i++)
    {
        ctx.fillRect(i * 3, 256-dataArray[i], 2, 256);
    }
    requestAnimationFrame(draw);
}


// AUDIO
let aud = document.querySelector('audio');
// upload file
audioFile.onchange = function() {
    var files = this.files;
    var file = URL.createObjectURL(files[0]); 
    aud.src = file; 
} 
// pause and playback function
function play() {
  let play = document.querySelector('#play');
  if (aud.paused) {
    aud.play();
    play.textContent = "Pause";
  } else {
    aud.pause();
    play.textContent = "Play";
  }
}
// 1x/2x speed
function fast() {
  let play = document.querySelector('#fast');
  if (aud.playbackRate == 1.0) {
    aud.playbackRate = 2.0;
    play.textContent = "1x";
  } else {
    aud.playbackRate = 1.0;
    play.textContent = "2x";
  }
}  
// start audio from beginning
function rewind() {
  aud.currentTime = 0;
}
// switch sound on/off
function mute() {
  let mtxt = document.querySelector('#mute');
  if (aud.muted) {
    aud.muted = false;
    mtxt.textContent = "Mute";
  } else {
    aud.muted = true;
    mtxt.textContent = "Sound on";
  }
}
// audio control panel
function control() {
  let ctr = document.querySelector('#ctrl');
  if (aud.controls == false) {
    aud.controls = true;
    ctr.textContent = "Hide controls";
   } else {
    aud.controls = false;
    ctr.textContent = "Display controls";
  }
}
