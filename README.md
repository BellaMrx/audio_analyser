# audio_analyser

 audio analyser 

Try it out here: https://book-of-coding.com/build_projects.html

Not all browsers support these new APIs. Some display it differently, it works best on Firefox.

In order to be able to retrieve the output directly from the sound card, i.e. not via the microphone, a setting must be made. For Realtek: "Stereo mix" must be set for "Recording" in the sound settings. Otherwise it will only work via the microphone.

- You can find an introduction to WebAPIs here:

https://book-of-coding.com/js4.html#lec-D-js


- An explanation of the APIs used here can be found here:

createAnalyser :

https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser


getByteFrequencyData :

https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData


getUserMedia :

https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia


createMediaStreamSource : 

https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource


playbackRate :

https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate



Preview:

![Preview](images/Preview_Audio_Analyzer.png)