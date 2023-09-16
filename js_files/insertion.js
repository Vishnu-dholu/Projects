document.addEventListener('DOMContentLoaded', () => {
    async function insertionSort () {
        
        const bars = document.querySelectorAll('.bar');
        const n = bars.length;

        for(let i = 1; i < n; i++){
            const keyBar = bars[i];
            let j = i - 1;

            keyBar.style.backgroundColor = 'red';

            await new Promise((resolve) => setTimeout(resolve, 50));

            const keyHeight = parseInt(keyBar.style.height);

            while (j >= 0 && parseInt(bars[j].style.height) > keyHeight) {

                const currentBar = bars[j + 1];
                const previousBar = bars[j];

                currentBar.style.backgroundColor = 'red';
                previousBar.style.backgroundColor = 'red';


                await new Promise((resolve) => setTimeout(resolve, 50));

                const tempHeight = currentBar.style.height;
                currentBar.style.height = previousBar.style.height;
                previousBar.style.height = tempHeight;

                currentBar.style.backgroundColor = '#17909A';
                previousBar.style.backgroundColor = '#17909A';

                j--;

                
            }

            bars[j + 1].style.height = keyHeight + '%';

            bars.forEach((bar, index) => {
                if (index <= i) {
                    bar.style.backgroundColor = 'green';
                }
            });

        }
    }

    const insertionSortButton = document.querySelector('.insertion-sort');
    insertionSortButton.addEventListener('click', insertionSort);
});