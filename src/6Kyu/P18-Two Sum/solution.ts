function twoSum(numbers: number[], target: number): number[] {
    let arr: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (i != j) {
          if (numbers[i] + numbers[j] === target) {
            arr.push(i);
            arr.push(j);
            break;
          }
        }
      }
      if (arr.length >= 1) {
        break;
      }
    }
  
    return arr;
  }
  console.log(twoSum([1, 2, 3], 4));