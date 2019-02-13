var item = document.getElementById("todo");
var submit = document.getElementById("submitBtn");
var msg;

function send(){
   item = item.value;
   msg  = createElement('h2', item);
   msg.parent('container');
 }


// BUGLIST
  // Idk why but browser doesn't recognie p5 functions
  // Also it doesn't keep the new element so yay
