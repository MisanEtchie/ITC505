document.addEventListener('DOMContentLoaded', function() {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const colorDisplay = document.getElementById('colorDisplay');

    function updateColor() {
        const r = redSlider.value;
        const g = greenSlider.value;
        const b = blueSlider.value;
        colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    redSlider.oninput = updateColor;
    greenSlider.oninput = updateColor;
    blueSlider.oninput = updateColor;

    // Update the last modified date in the footer
    document.getElementById('lastModified').textContent = document.lastModified;
});
