function deleteNth(arr: number[], n: number): number[] {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
                if (count > n) {
                    arr.splice(j, 1);
                    j--;
                }
            }
        }
    }
    return arr;
}

console.log(deleteNth([20, 37, 20, 21], 1))