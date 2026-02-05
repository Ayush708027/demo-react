import User from "./User"
import College from "./College"

function App(){
  // let userName="Ayush Prajapati";
  // let age=23;
  // let email="ayush@test.com"
  let userObject1={
    name:"Ayush Prajapati",
    age:29,
    email:"ayush@test.com"
  }
  let userObject2={
    name:"Mohit",
    age:18,
    email:"mohit@test.com"
  }
  let collegeName=['IET','DU','IIT','NIT','MIT']

  return(
    <div>
      <h1>Props in React Js</h1>
      <College name={collegeName}/>
       
        {/* <User name={userName} age={age} email={email}/> */}
        <User user={userObject1} />
         <User user={userObject2} />
    </div>
  )
}
export default App;