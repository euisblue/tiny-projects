document.addEventListener('DOMContentLoaded', function() {
    regen();
    function regen() {
        const palettes = document.querySelectorAll('.palette');
        const copiedInfo = document.querySelector('.info');
        
        palettes.forEach((palette) => {
            let randomColor = (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
            palette.style.backgroundColor = `#${randomColor}`;
            console.log('color: ', randomColor);
            
            palette.addEventListener('click', (e) => {
                navigator.clipboard.writeText(randomColor);
                copiedInfo.classList.remove('hide');
                setTimeout(function() {
                    copiedInfo.classList.add('hide');
                }, 1000);
            })
        });
    }

    const generateButton = document.querySelector('.generate-btn');

    generateButton.addEventListener('click', regen);
});