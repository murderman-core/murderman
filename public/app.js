var socket;
var canvas;
var gl;

function init()
{
    socket = io.connect("https://murderman.herokuapp.com");
    canvas = document.getElementById("game");
    gl = canvas.getContext("webgl");

    if (gl === null) {
        alert("Sorry! It looks like our game failed to initialize. This may be caused by you machine not supporting webgl.");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}