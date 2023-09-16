document.addEventListener('DOMContentLoaded', () => {
    async function mergeSort() {
        const bars = document.querySelectorAll('.bar');
        const sortedBars = await mergeSortHelper(Array.from(bars));
        markSorted(sortedBars);
    }

    async function mergeSortHelper(bars) {
        if (bars.length <= 1) {
            return bars;
        }

        const middle = Math.floor(bars.length / 2);
        const left = bars.slice(0, middle);
        const right = bars.slice(middle);

        const sortedLeft = await mergeSortHelper(left);
        const sortedRight = await mergeSortHelper(right);

        return merge(sortedLeft, sortedRight);
    }

    async function merge(left, right) {
        const sortedBars = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            const barLeft = left[leftIndex];
            const barRight = right[rightIndex];

            barLeft.style.backgroundColor = 'red';
            barRight.style.backgroundColor = 'red';

            await new Promise((resolve) => setTimeout(resolve, 50));

            if (parseInt(barLeft.style.height) < parseInt(barRight.style.height)) {
                sortedBars.push(barLeft);
                leftIndex++;
            } else {
                sortedBars.push(barRight);
                rightIndex++;
            }

            barLeft.style.backgroundColor = '#17909A';
            barRight.style.backgroundColor = '#17909A';
        }

        return sortedBars.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    function markSorted(sortedBars) {
        sortedBars.forEach((bar) => {
            bar.style.backgroundColor = 'green';
        });
    }

    const mergeSortButton = document.querySelector('.merge-sort');
    mergeSortButton.addEventListener('click', mergeSort);
});
