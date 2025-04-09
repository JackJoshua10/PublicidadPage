const btnVideo = document.getElementById('btn-video');
const overlayVideo = document.getElementById('overlay-video');

btnVideo.addEventListener('click', () => {
	overlayVideo.classList.add('active');
});

overlayVideo.addEventListener('click', () => {
	overlayVideo.classList.remove('active');
});
