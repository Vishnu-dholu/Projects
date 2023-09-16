document.addEventListener('DOMContentLoaded', () => {
    async function bubbleSort() {
        const bars = document.querySelectorAll('.bar');
        const n = bars.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                const bar1 = bars[j];
                const bar2 = bars[j + 1];

                // Mark bars as being compared (red)
                bar1.style.backgroundColor = 'red';
                bar2.style.backgroundColor = 'red';

                // Delay to visualize the comparison
                await new Promise((resolve) => setTimeout(resolve, 50));

                const height1 = parseInt(bar1.style.height);
                const height2 = parseInt(bar2.style.height);

                if (height1 > height2) {
                    // Swap the heights (simple swapping logic)
                    const tempHeight = bar1.style.height;
                    bar1.style.height = bar2.style.height;
                    bar2.style.height = tempHeight;
                }

                // Reset bar colors
                bar1.style.backgroundColor = "#17909A";
                bar2.style.backgroundColor = "#17909A";
            }

            // Mark the last bar as sorted (green)
            bars[n - i - 1].style.backgroundColor = 'green';
        }

        // Mark the first bar as sorted (green)
        bars[0].style.backgroundColor = 'green';
    }

    const bubbleSortButton = document.querySelector('.bubble-sort');
    bubbleSortButton.addEventListener('click', bubbleSort);
});
