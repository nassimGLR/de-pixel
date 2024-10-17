let isVideoPlaying = false;
let canPlayOverlay = false; // Flag to control when the overlay video can be played
let canNavigate = false; // Flag to control navigation

function playOverlayVideo() {
    if (isVideoPlaying || !canPlayOverlay) return; // Prevent multiple overlay videos and block if not allowed

    isVideoPlaying = true;

    const existingVideo = document.getElementById('background-video');
    existingVideo.pause();

    const newVideo = document.createElement('video');
    newVideo.src = '/websites/michael/videos/pressanykey.mp4';
    newVideo.muted = true; // Mute for autoplay to work in most browsers
    
    newVideo.style.position = 'absolute';
    newVideo.style.top = '0';
    newVideo.style.left = '0';
    newVideo.style.width = '100%';
    newVideo.style.height = '100%';
    newVideo.style.objectFit = 'cover';
    newVideo.style.zIndex = '100';
    
    document.querySelector('.container').appendChild(newVideo);
    newVideo.play();

    // Allow navigation only after the overlay video ends
    newVideo.addEventListener('ended', function() {
        canNavigate = true; // Enable navigation after the overlay video ends
        // Navigate to the next page after the overlay video ends
        window.location.href = '/websites/michael/pages/mainpage.html';
    });
}

// Set up videos on page load
const backgroundVideo = document.getElementById('background-video');
backgroundVideo.src = '/websites/michael/videos/firsttime.mp4'; // Your initial video
backgroundVideo.muted = false; // Mute for autoplay to work in most browsers
backgroundVideo.play().catch(error => {
    console.error('Error playing video:', error);
});

// Listen for the end of the first video
backgroundVideo.addEventListener('ended', function() {
    // Automatically play the looping video after the first one ends
    backgroundVideo.src = '/websites/michael/videos/secondtime.mp4'; // Change to your looping video source
    backgroundVideo.loop = true;
    backgroundVideo.play();
});

// Allow the overlay video to be played only after 300 milliseconds
setTimeout(() => {
    canPlayOverlay = true; // Enable overlay video play
}, 5000); // Change to 300ms

// Trigger overlay video or navigation on click
document.addEventListener('click', function() {
    if (canNavigate) {
        // Immediately navigate to the next page
        window.location.href = '/websites/michael/pages/mainpage.html';
    } else {
        playOverlayVideo(); // Play overlay video if allowed
    }
});

// Trigger overlay video or navigation on keydown
document.addEventListener('keydown', function() {
    if (canNavigate) {
        // Immediately navigate to the next page
        window.location.href = '/websites/michael/pages/mainpage.html';
    } else {
        playOverlayVideo(); // Play overlay video if allowed
    }
});
