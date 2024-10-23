let isVideoPlaying = false;
let canPlayOverlay = false;
let canNavigate = false;

function playOverlayVideo() {
    if (isVideoPlaying || !canPlayOverlay) return;

    isVideoPlaying = true;

    const existingVideo = document.getElementById('background-video');
    existingVideo.pause();

    const newVideo = document.createElement('video');
    newVideo.src = '/websites/michael/videos/pressanykey.mp4';
    newVideo.muted = false;

    newVideo.style.position = 'absolute';
    newVideo.style.top = '0';
    newVideo.style.left = '0';
    newVideo.style.width = '100%';
    newVideo.style.height = '100%';
    newVideo.style.objectFit = 'cover';
    newVideo.style.zIndex = '100';

    document.querySelector('.container').appendChild(newVideo);
    newVideo.play();

    newVideo.addEventListener('ended', function() {
        canNavigate = true;
        window.location.href = '/websites/michael/pages/mainpage.html';
    });
}

const backgroundVideo = document.getElementById('background-video');
backgroundVideo.src = '/websites/michael/videos/firsttime.mp4';
backgroundVideo.muted = false;

backgroundVideo.play().catch(error => {
    console.error('Error playing video:', error);
});

backgroundVideo.addEventListener('ended', function() {
    backgroundVideo.src = '/websites/michael/videos/secondtime.mp4';
    backgroundVideo.loop = true; // Enable looping for the second video
    backgroundVideo.play().catch(error => {
        console.error('Error playing second video:', error);
    });
});

// Set canPlayOverlay to true after 5 seconds
setTimeout(() => {
    canPlayOverlay = true;
}, 5000);

// Event listeners for clicks and key presses
document.addEventListener('click', function() {
    if (canNavigate) {
        window.location.href = '/websites/michael/pages/mainpage.html';
    } else {
        playOverlayVideo();
    }
});

document.addEventListener('keydown', function() {
    if (canNavigate) {
        window.location.href = '/websites/michael/pages/mainpage.html';
    } else {
        playOverlayVideo();
    }
});
