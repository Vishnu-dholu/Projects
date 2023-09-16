document.addEventListener('DOMContentLoaded', () => {
    // Function to generate an array of random integers
    function generateRandomIntegers(count, min, max) {
        const randomIntegers = [];

        for (let i = 0; i < count; i++) {
            const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
            randomIntegers.push(randomInteger);
        }
        return randomIntegers;
    }

    // Function to create and append div elements representing bars
    function createAndAppendBars(container, values) {
        container.innerHTML = ''; // Clear existing bars

        values.forEach((value) => {
            const barDiv = document.createElement('div');
            barDiv.classList.add('bar');
            barDiv.style.height = `${value}%`;
            container.appendChild(barDiv);
        });
    }

    function initializeBars() {
        const barContainer = document.getElementById('bar-container');

        if (barContainer) {
            const arrSizeInput = document.getElementById('arr_sz');
            const barCount = parseInt(arrSizeInput.value);
            const MIN_HEIGHT = 5;
            const MAX_HEIGHT = 50;

            const randomIntegersArray = generateRandomIntegers(barCount, MIN_HEIGHT, MAX_HEIGHT);
    
            createAndAppendBars(barContainer, randomIntegersArray);
        }
    }

    initializeBars();

    const newArrayButton = document.getElementById("new-array");
    newArrayButton.addEventListener('click', initializeBars);

    const arrSizeInput = document.getElementById('arr_sz');
    arrSizeInput.addEventListener("input", initializeBars);
});
