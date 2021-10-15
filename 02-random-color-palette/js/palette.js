document.addEventListener('DOMContentLoaded', function() {
    const palettes = document.querySelectorAll('.palette');
    
    palettes.forEach((palette) => {
        palette.style.backgroundColor = "#00F";
    });
});