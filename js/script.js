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

// Handle tile clicks
document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', () => {
        // Close all other tiles
        document.querySelectorAll('.tile').forEach(t => {
            if (t !== tile) {
                t.classList.remove('expanded');
            }
        });

        // Toggle the clicked tile
        const isExpanded = tile.classList.contains('expanded');
        tile.classList.toggle('expanded');

        // Adjust max-height dynamically for smooth animation
        if (!isExpanded) {
            const pElement = tile.querySelector('p');
            pElement.style.maxHeight = `${pElement.scrollHeight}px`; // Adjust max-height to content height
        } else {
            tile.querySelector('p').style.maxHeight = '0'; // Collapse
        }
    });
});