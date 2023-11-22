let videoElement = document.querySelector('video');
let currentSize = 1.0; // Initial size

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "enablePiP") {
      videoElement.webkitSetPresentationMode('picture-in-picture');
    } else if (request.action == "togglePlayPause") {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    } else if (request.action == "increaseSize") {
      currentSize += 0.1;
      videoElement.style.transform = `scale(${currentSize})`;
    } else if (request.action == "decreaseSize") {
      currentSize -= 0.1;
      videoElement.style.transform = `scale(${currentSize})`;
    }
  }
);
