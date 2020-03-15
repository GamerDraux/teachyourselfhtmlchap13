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
    // alert(`there are ${count} element nodes in "olElement"`);
}

window.onload = countListItems;