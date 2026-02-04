import {useState} from "react";
import User from "./User.jsx"
function App(){
  const[display,setDisplay]=useState(true)
  return(
    <div>
      <h1>Toggle in React JS</h1>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {/* {display?<h1>Ayush Prajapati</h1>:null}*/}
      {
        display?<User/>:null
      }
      
    </div>
  )
}
export default App;  