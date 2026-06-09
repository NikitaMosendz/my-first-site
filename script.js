const button = document.getElementById('theme-btn');
const body = document.body;

button.addEventListener('click', () => {
    if (body.classList.toggle('light-theme')) {
        button.textContent = 'Dark theme'
    } else {
        button.textContent = 'Light theme'
    }
})