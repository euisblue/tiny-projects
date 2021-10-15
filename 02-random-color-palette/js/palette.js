document.addEventListener('DOMContentLoaded', function() {
    const palettes = document.querySelectorAll('.palette');
    const copiedInfo = document.querySelector('.info');

    palettes.forEach((palette) => {
        // let randomColor = Math.floor(Math.random()*16777215).toString(16);
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
});