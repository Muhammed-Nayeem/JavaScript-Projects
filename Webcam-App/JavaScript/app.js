/**
 * Application-Name: WebCam and Image Capturing;
 *
 * navigator: This is an browser object that contains all the browser method of webcam related;
 *
 * Phase One: Make a WebCam (video, audio);
 *
 * Phase Two: Make a WebCam with Image Capturing (video, canvas);
 */

//Select all the elements and assigning them to variable:
const webcamVideo = document.getElementById("video");
const webCamera = navigator.mediaDevices.getUserMedia;

if (webCamera) {
  navigator.mediaDevices
    .getUserMedia({
      video: { width: 600, height: 400 },
      audio: true,
    })
    .then((streamLive) => {
      webcamVideo.srcObject = streamLive;
    })
    .catch((error) => {
      console.log(error.message);
    });
}

/**
 * Phase-Two: WebCam with Image Capturing
 */
const imageCanvas = document.getElementById("image-canvas");
const takePhotoBtn = document.getElementById("takephoto");
const context = imageCanvas.getContext("2d");

takePhotoBtn.addEventListener("click", () => {
  context.drawImage(webcamVideo, 0, 0, 750, 700);
});
