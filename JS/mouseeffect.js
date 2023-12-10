// mouseeffect.js

document.addEventListener("DOMContentLoaded", function () {
    var mouseFollower = document.getElementById("mouse-follower");
    var mouseImage = document.getElementById("mouse-image");
  
    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
  
      // Update the position of the mouse follower
      mouseFollower.style.left = x + "px";
      mouseFollower.style.top = y + "px";
  
      // Update the position of the mouse image (centered on the cursor)
      mouseImage.style.left = x - mouseImage.offsetWidth / 2 + "px";
      mouseImage.style.top = y - mouseImage.offsetHeight / 2 + "px";
    });
  });
  