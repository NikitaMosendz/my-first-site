const button = document.getElementById('theme-btn');
const body = document.body;
const clickCounter = document.getElementById('click-counter');

let clicks = 0;

button.addEventListener('click', () => {
    clickCounter.textContent = `Clicks: ${++clicks}`
    
    if (body.classList.toggle('light-theme')) {
        button.textContent = 'Dark theme'
    } else {
        button.textContent = 'Light theme'
    }
})