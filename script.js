
let init = function (){
    console.log ('DOM elements initialized')
};


let countListItems = function (){
    olElement=document.getElementById('toDoList');
    console.log (olElement);
    console.log (olElement.childNodes);
    count=0;
    for (i=0; i<olElement.childNodes.length; i++){
        if(olElement.childNodes[i].nodeType===1){
            count ++;
        }
    }
    alert(`there are ${count} element nodes in "olElement"`);
}


let printParValue = function (){
    text="";
    pElement = document.getElementById('toDoNotes');
    console.log(pElement);
    console.log(pElement.childNodes);
    for (i=0; i<pElement.childNodes.length; i++){
        if (pElement.childNodes[i].nodeType===3){
            text += pElement.childNodes[i].nodeValue;
        }
    }
    alert ("The paragraph says:\n\n"+text);
}


let alertAllDivText = function (){
    text="";
    divElementArr= document.getElementsByTagName("div");
    console.log (divElementArr);
    console.log (divElementArr[0]);
    for (i=0; i<divElementArr.length; i++){
        text += divElementArr[i].innerHTML;
        text += "\n";
    }
    alert("The Div texts go like this:\n\n"+text);
}

var newDiv = document.createElement('div');
var newTextNode = document.createTextNode('Here is some new text content');
let toDoNotes = document.getElementById('toDoNotes');
toDoNotes.appendChild(newDiv);
console.log (newDiv);
newDiv.innerHTML="very important new text";

window.addEventListener('load', init);
document.addEventListener('load', console.log ('document loaded'));
window.addEventListener('load', alertAllDivText);
window.addEventListener('load', printParValue);
window.addEventListener('load',countListItems);
