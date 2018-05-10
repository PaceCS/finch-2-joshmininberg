"use strict";

load("readline.js");
load("Finch.js");

// Gain access to our finch
var finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line

// Our first set of code will play one note,, wait 1 second, then play a different note
// finch.playTone(440, 1000);
// wait(1000);
// finch.playTone(220, 1000);
// wait(1000);

// Play a song
// Write your code here to play a song.  The array arr has the frequencies you will need to play
// The timing for each note is stored in the time array

// const arr = [329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 293.7, 293.7, 293.7, 329.6, 392, 392, 329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 329.6, 293.7, 293.7, 329.6, 293.7, 261.6];
// const time = [1000,1000,1000,1000,1000,1000,2000,1000,1000,2000,1000,1000,2000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]
// for(let counter = 0; counter < time.length; counter += 1) {
//     finch.playTone(arr[counter], time[counter])
//     wait(1000)
// }

// Create a sound & light show
// Write your own code here to create a light show of your choosing
for (var counter = 0; counter < 9; counter += 1) {
    var wait = function wait(msecs, buffer) {
        var buf = buffer ? buffer : 100;
        var time1 = new Date().getTime();
        var time2 = new Date().getTime();
        while (time2 < time1 + msecs + buf) {
            time2 = new Date().getTime();
        }
    };

    finch.setLED(255, 185, 0);
    wait(200);
    finch.setLED(255, 100, 150);
    wait(200);
    finch.setLED(200, 225, 0);
    wait(200);
    finch.setLED(217, 109, 110);
    wait(200);
    finch.setLED(7, 20, 89);
    wait(200);
    finch.setLED(90, 249, 165);
    wait(200);
    var arr = [329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 293.7, 293.7, 293.7, 329.6, 392, 392, 329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 329.6, 293.7, 293.7, 329.6, 293.7, 261.6];
    var time = [1000, 1000, 1000, 1000, 1000, 1000, 2000, 1000, 1000, 2000, 1000, 1000, 2000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
    for (var _counter = 0; _counter < time.length; _counter += 1) {
        finch.playTone(arr[_counter], time[_counter]);
        wait(200);
    }
}
