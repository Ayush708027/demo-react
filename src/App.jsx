import {useState} from "react"
function App(){
  const[name,setName]=useState('')
  const[password,setPassword]=useState('')
  const[email,setEmail]=useState('')
  return(
    <div>
      <h1>Controller Component </h1>

      <form action="" method="get">

        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"/>
        <br />< br/>

         <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"/>
        <br />< br/>

         <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"/>
        <br />< br/>

        <button>Submit</button>

        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
        
        <button onClick={()=>{setEmail('');setName('');setPassword('')}}>clear</button>
      </form>
    </div>
  )
}
export default App;