Description:
// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:


function perimeter(n) {
    let newArray=[];
    newArray[0]=1;
    newArray[1]=1;
    let sum=2;
  if(n==0) 
  {
      return 4
  }
  
    
  for(let i=0;i<n-1;i++){
    newArray[i+2]=newArray[i]+newArray[i+1];
    sum=sum+newArray[i+2];
  }  
   
    return sum*4;
}
console.log(perimeter(5))