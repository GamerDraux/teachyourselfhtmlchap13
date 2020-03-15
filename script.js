document.addEventListener('load', console.log ('document loaded'));

let init = function (){
    console.log ('DOM elements initialized')
};

window.onload=init;

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

window.onload = countListItems;

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

// window.onload = printParValue;