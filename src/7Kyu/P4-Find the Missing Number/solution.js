// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
    let n=100;
  let add=n+1
  let mul=(n*add)/2;
  let len=nums.length
  let sum=0;
  for(i=0;i<len;i++)
  {
   sum =sum+nums[i];   
      
  }
  
  let misno=mul-sum
  
  return misno;
  }

let nums=[]
  console.log(missingNo(nums));