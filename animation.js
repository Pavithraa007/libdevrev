
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var loaderVideo = document.getElementById('loaderVideo');
      if (loaderVideo) {
        loaderVideo.pause(); // Pause the video
      }
      window.location.href = "login.html"; // Redirect to login page
    }, 3000); // Wait for 3 seconds (3000 milliseconds)
  });
  