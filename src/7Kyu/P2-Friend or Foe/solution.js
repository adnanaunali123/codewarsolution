// Description:
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}

function friend(friends){
    let length=friends.length;
     let array=[]
     let j=0;
     console.log();
      
         for(let i=0;i<length;i++){
           
         if(friends[i].length==4)
             {
                 array[j]=friends[i];
                 j++;
             }
         }
     
 
     
     return array;
 }
 
 
    let friends=["Ryan", "Kieran", "Jason", "Yous"]
    console.log(friend(friends));
    