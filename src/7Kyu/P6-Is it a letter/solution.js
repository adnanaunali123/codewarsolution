// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.
function isItLetter(character) {
    character=character.toUpperCase()
    
    
    for(let i="A";i<"Z";i++)
    {
      if(character==i)  
        {
            
           return true ;
        }
        
    }
    return false;
    
}


console.log(isItLetter("a"))