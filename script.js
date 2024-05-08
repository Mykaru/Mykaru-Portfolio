document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('fullscreen-image').src = img.src;
        document.getElementById('fullscreen-overlay').style.display = 'block';
    });
});
document.querySelectorAll('.image-container-portrait img').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('fullscreen-image').src = img.src;
        document.getElementById('fullscreen-overlay').style.display = 'block';
    });
});

document.getElementById('fullscreen-overlay').addEventListener('click', () => {
    document.getElementById('fullscreen-overlay').style.display = 'none';
});