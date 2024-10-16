// Function to navigate to the next page after playing a video
function playOverlayVideo() {
    const existingVideo = document.getElementById('background-video');
    
    // Pause the existing video
    existingVideo.pause();

    // Create a new video element
    const newVideo = document.createElement('video');
    newVideo.src = '/websites/michael/videos/start.mp4'; // Replace with the path to your new video
    newVideo.play();

    // Set styles to maintain size and position
    newVideo.style.position = 'absolute'; // Position it absolutely
    newVideo.style.top = '0'; // Align to the top
    newVideo.style.left = '0'; // Align to the left
    newVideo.style.width = '100%'; // Set to fill the container width
    newVideo.style.height = '100%'; // Set to fill the container height
    newVideo.style.objectFit = 'cover'; // Maintain aspect ratio and cover the area
    newVideo.style.zIndex = '100'; // Higher z-index to overlay the existing video
    document.querySelector('.container').appendChild(newVideo); // Append to the container

    // Play the new video for 2 seconds
    setTimeout(function() {
        // Navigate to the next page after the new video has played
        window.location.href = '/websites/michael/pages/page2.html';
    }, 2500); // 2000 milliseconds = 2 seconds
}

// Listen for keydown events
document.addEventListener('keydown', playOverlayVideo);

// Listen for click events
document.addEventListener('click', playOverlayVideo);
