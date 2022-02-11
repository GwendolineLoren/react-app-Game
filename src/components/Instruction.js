import React from 'react';


// Create function to display Help information (rules of the game etc)
function Instruction() {
 return (

  // Main container div
  <
  div id = "top"
  className = "helpDiv" >
  <
  h1 > Minesweeper Instruction < /h1>

  <
  h2 > Introduction < /h2> <
  p > Minesweeper is an enjoyable game that forces the player to really use their thinking skills to win.The board of blocks may look safe enough, but concealed beneath some of the blocks are dangerous mines that are rigged to explode!It 's your job to guess where they are and carefully mark them with red flags, so that nobody sets them off by accident. Luckily, there are hints to assist you along the way, but that'
  s not to say it 's going to be easy! <
  /p> <
  /div>
 )
}

// Export component so it can be used by App.js
export default Instruction;