let txt;
let items = ['Programmer.', 'Engineer.', 'Musician.', 'Problem-Solver.','Runner.'];
let word = "I'm a ";
let j = 0;
let i =0;
function setup(){
  frameRate(60);
  setChar();
}

function setChar(){
  txt = select('#sub');
  if( i >= items.length){
    i = 0;
    setChar();
  }else{
    if(j < items[i].length){
        word += items[i].charAt(j);
        txt.html(word);
        j++;
        setTimeout(setChar, 100);
      }
      else{
        setTimeout(reset, 500);
      }
  }
}
function reset(){
  setTimeout(setChar, 500);
  if (i == 0){
  word = "I'm an ";
} else{
  word = "I'm a ";
}
  if (i == 0){
  txt.html("I'm an");
} else{
  txt.html("I'm a");
}
  j=0;
  i++;
}
