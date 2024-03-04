//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(dog_string, dog_names){
    console.log('CASE SENSITIVE')
    for( let i = 0; i < dog_names.length; i++){
        console.log(`${dog_names[i]} ${
            dog_string.includes(dog_names[i]) ? 'matched' : 'did not match'
        } a word in the string`)
    }
    
    console.log('CASE INSENSITIVE:')
    for( let i = 0; i < dog_names.length; i++){

        console.log(`${dog_names[i]} ${
            dog_string.toLowerCase().includes(dog_names[i].toLowerCase()) ? 'matched' : 'did not match'
        } a word in the string`)
    }
}

findWords(dog_string, dog_names)