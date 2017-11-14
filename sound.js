load("readline.js");
load("Finch.js");

// Gain access to our finch
let finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line

// Our first set of code will illuminate the Finch in one color, wait 1 second, then illuminate it in a different color
finch.playTone(440, 1000);
wait(1000);
finch.playTone(220, 1000);
wait(1000);

// Play a song
// Write your code here to model 3 cycles of a traffic light
const arr = [329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 293.7, 293.7, 293.7, 329.6, 392, 392, 329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 329.6, 293.7, 293.7, 329.6, 293.7, 261.6];

const time = [1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1]

// Create a sound & light show
// Write your own code here to create a light show of your choosing


































function wait(secs, buffer) {
    var buf = buffer ? buffer : .1;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime() ;
    while (time2 < time1 + secs + buf) {
        time2 = new Date().getTime();
    }
}
