document.addEventListener('DOMContentLoaded', () => {
    async function selectionSort() {

        const bars = document.querySelectorAll('.bar');
        const n = bars.length;

        for(let i = 0; i < n - 1; i++){
            let minIndex = i;

            for(let j = i + 1; j < n; j++){

                const bar1 = bars[j];
                const bar2 = bars[minIndex];

                bar1.style.backgroundColor = 'red';
                bar2.style.backgroundColor = 'red';
            
                await new Promise((resolve) => setTimeout(resolve, 50));

                const height1 = parseInt(bar1.style.height);
                const height2 = parseInt(bar2.style.height);

                if (height1 < height2){
                    minIndex = j;
                }

                bar1.style.backgroundColor = "#17909A";
                bar2.style.backgroundColor = "#17909A";
            }

                
            const tempHeight = bars[i].style.height;
            bars[i].style.height = bars[minIndex].style.height;
            bars[minIndex].style.height = tempHeight;

            bars[i].style.backgroundColor = 'green';
        }

        bars[n - 1].style.backgroundColor = 'green';

    }

    const selectionSortButton = document.querySelector('.selection-sort');
    selectionSortButton.addEventListener('click', selectionSort);
});