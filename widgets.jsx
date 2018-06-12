import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock.jsx'
import Tabs from './frontend/tabs.jsx'

// class Widgets extends React.Component{
//   constructor(props){
//     super(props);
//     //your code here
//   }
//
//   //your code here
//
//   render(){
//     return (
//       <div>
//         <h1>Hello World</h1>
//         //your code will replace this
//       </div>
//     );
//   }
// }

function Root() {
  return(
    <div>
      <Clock/>
      <Tabs />
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById("main"));
});
