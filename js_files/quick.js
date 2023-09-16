document.addEventListener('DOMContentLoaded', () => {
    async function quickSort() {
        const bars = document.querySelectorAll('.bar');
        await quickSortHelper(bars, 0, bars.length - 1);
        
        // Mark all bars as sorted (green) after quicksort is complete
        bars.forEach((bar) => {
            bar.style.backgroundColor = 'green';
        });
    }
    
    async function quickSortHelper(bars, low, high) {
        if (low < high) {
            const pivotIndex = await partition(bars, low, high);
            await quickSortHelper(bars, low, pivotIndex - 1);
            await quickSortHelper(bars, pivotIndex + 1, high);
        }
    }
    
    async function partition(bars, low, high) {
        const pivot = parseInt(bars[high].style.height);
        let i = low - 1;
    
        for (let j = low; j < high; j++) {
            const bar = bars[j];
    
            // Mark the pivot and bars as being compared (red)
            bar.style.backgroundColor = 'red';
            bars[high].style.backgroundColor = 'red';
    
            // Delay to visualize the comparison
            await new Promise((resolve) => setTimeout(resolve, 50));
    
            if (parseInt(bar.style.height) < pivot) {
                i++;
                const tempHeight = bar.style.height;
                bar.style.height = bars[i].style.height;
                bars[i].style.height = tempHeight;
    
                // Reset bar colors
                bar.style.backgroundColor = "#17909A";
                bars[i].style.backgroundColor = "#17909A";
            }
        }
    
        const tempHeight = bars[i + 1].style.height;
        bars[i + 1].style.height = bars[high].style.height;
        bars[high].style.height = tempHeight;
    
        // Mark the pivot as sorted (green)
        bars[high].style.backgroundColor = 'green';
    
        return i + 1;
    }

    const quickSortButton = document.querySelector('.quick-sort');
    quickSortButton.addEventListener('click', quickSort);
});
