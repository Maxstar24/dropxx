var i = 0;
var txt = 'Drop X'; // The text
var speed = 100; // Speed of typing in milliseconds

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Drop-X").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;