let userInput1 = document.getElementById("left");
let userInput2 = document.getElementById("right");
let results = document.getElementById("result");
const resultElement= document.createElement("h5"); //result element is created on every check.  
// checking if userInput1 word is same as userInput2 word 

// on click of the button checkWord function runs.
function checkWord(){
    
    // if length of the two words are the same
    let value1= userInput1.value.trim();
    let value2= userInput2.value.trim();
    if(value1.length === value2.length){
 // sorting userInput1 word alphabetically
        let sortedInput1 = value1.split("").sort().join("");
         // sorting userInput2 word alphabetically
        let sortedInput2 = value2.split("").sort().join("");
       if(sortedInput1 === sortedInput2){ // comparing both the sorted strings.
            didMatch();
        }else{  
            didnotMatch(); 
        }
       
    }else{   //if length is different
        didnotMatch();
    }

}

function didMatch(){
    let text= "it is an anagram!"
    createResultElement("right",text)
}


function didnotMatch(){
    let text= "it is not an anagram!"
    createResultElement("wrong",text)
}

function createResultElement(output,txt){  // result element class is added  
    resultElement.className = `${output}`; 
    resultElement.innerText= txt;
    results.appendChild(resultElement);
}


    