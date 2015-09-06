var buttons = document.getElementsByTagName('button');
// var playerState = "X";


/* each button houses a vertex object, with a list of connected vertices
 * common magnitudes occur between vertexes indicating a line
 * so winning spots can only exist as two connected vertices
 * sharing both the same magnitude and playerState
 * on click, we can check (recursively) local vertices for matching playerState.
 * and declare winner if found.
 * */








function updateSquare (square) {
  square.target.innerHTML = playerState;
}

for ( var i = 0 ; i < buttons.length ; i++ ) {
  buttons[i].addEventListener('click', updateSquare, false);
}

document.getElementById('clearbtn').addEventListener('click', function () {
  console.log("clrbuttonclicked");
  for ( var i = 0 ; i< buttons.length ; i++  ) {
    buttons[i].innerHTML = '';
    console.log(buttons[i], " cleared");
  }
}, false);

