function App(){
  const userName="Ayush Prajapati"
  let x=20;
  let y=30;
  return(
    <div>
      <h1>{userName}</h1>
      <h1>{10+30+40}</h1>
      <h1>{x*y}</h1>
      <button onClick={()=>alert("Hello")}>click Me</button>
    </div>
  )
}
export default App;