function App(){
  const name="Ayush Prajapati"
  const userObj={
    name:"Ayush",
    email:"ayush@text.com",
    age:23
  }
  const userArray=['sam','amit','ayush']

  let x=10;
  let y=30;
  function Fruit(){
    return "Apple"
  }
  function sum(a,b){
    return a+b 
  }
  function operation (a,b, op){
    if(op=="+"){
      return a+b;
    }else if(op=="-"){
      return a-b;
    }else{
      return a*b
    }
  }
  return(
    <div>
      <h1>JSX with curly Braces</h1>
      <h1>{name}</h1>
      <h1>{x+y}</h1>
      <h1>{Fruit()}</h1>
      <h1>{sum(10,100)}</h1>
      <h1>{operation(20,10,"")}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userArray[0]}</h1>
    </div>
  )
}
export default App;
























// import Login,{Profile, Setting} from "./UserComponent";

// function App(){
//   return(
//     <div>
//       <h1>Importing and Exporting Components</h1>
//       <Login/>
//       <Profile/>
//       <Setting/>
//     </div>
//   )
// }
// export default App;
 