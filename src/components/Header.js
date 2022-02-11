import React from 'react';

// Import menu component
import Menu from './Menu';

// Create function to display header 
function Header() {
 return ( <
  header className = "header" >

  <
  div className = "heading" >
  <
  h1 > MinesGame < /h1> <
  /div>

  <
  Menu / >
  <
  /header>
 );
}

// Export component so it can be used by App.js
export default Header;