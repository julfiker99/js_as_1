function sortArrayChromeStyle(arr) {
    
    return arr.sort((a, b) => a - b);
}

let randomArray = Array.from({ length: 20 }, (_, i) => i + 1)
                        .sort(() => Math.random() - 0.5);

console.log("Random Array:", randomArray);

let sortedArray = sortArrayChromeStyle(randomArray);
console.log("Sorted Array:", sortedArray);
