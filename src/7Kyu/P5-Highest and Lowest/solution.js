Description:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"




function highAndLow(numbers){
    let myInt =numbers.split(" ").map(Number)
    let length =myInt.length;
    let highest=0;
    let lowest=myInt[0];
    
    for(let i=0;i<length;i++){
        if(highest<=myInt[i] )
        {
           highest= myInt[i];
           
            
        }
         else if (lowest >=myInt[i] )
        {
            
            lowest =myInt[i];
        }
        
        
        
        
    }
    
    
    return  highest +" " +lowest 
    }



 console.log(highAndLow())