document.addEventListener('DOMContentLoaded', () => {
    // Create the glow element
    const glow = document.createElement('div');
    glow.classList.add('glow');
    document.body.appendChild(glow);

    // Update the position of the glow effect based on mouse movement
    document.addEventListener('mousemove', (e) => {
        glow.style.left = `${e.clientX - glow.offsetWidth / 2}px`;
        glow.style.top = `${e.clientY - glow.offsetHeight / 2}px`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.animated-list li');
    listItems.forEach((item, index) => {
        item.style.setProperty('--animation-delay', `${index * 0.025}s`);
    });
});