function App(){
  function callFun(){
    alert("function called")
  }
  const fruit=()=>{
    alert("Apple")
  }
  return(
    <div>
      <h1>Event and function call</h1>
      <button onClick={()=>fruit("Apple")}>Apple </button>
      <button onClick={()=>callFun("function called")}>click Me</button>
    </div>
  )
}
export default App;