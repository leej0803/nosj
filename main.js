(function () {
  var bv = new Bideo();
  bv.init({
    videoEl: document.querySelector('#background_video'),
    container: document.querySelector('body'),
    resize: true,
    autoplay: true,
    isMobile: window.matchMedia('(max-width: 768px)').matches,
    playButton: null, // No play button
    pauseButton: null, // No pause button
    src: [
      {
        src: 'night.mp4',
        type: 'video/mp4'
      },
      {
        src: 'night.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
      // Fade in video after a short delay
      setTimeout(function() {
        const videoElement = document.getElementById('background_video');
        if (videoElement) {
          videoElement.style.opacity = 1;
          videoElement.style.transition = 'opacity 1s ease-in-out';
        }
      }, 500); // Adjust delay as needed (milliseconds)
    }
  });

  // Clean up video controls element if it exists
  const videoControls = document.getElementById('video_controls');
  if (videoControls) {
    videoControls.remove();
  }
}());